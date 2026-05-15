import { BizErrorPage } from '@/components/common/BizErrorPage';
import { NormalContainer } from '@/components/layout/container/Normal';
import { notFound } from 'next/navigation';
import { createElement, ReactNode, type FC } from 'react';
import { getErrorMessageFromRequestError } from './request.shared';

export class RequestError {
  constructor(
    readonly status: number,
    readonly raw: any,
  ) {
    this.status = status;
    this.raw = raw;
  }
}

export const requestErrorHandler = (error: Error | RequestError) => {
  if (
    error instanceof RequestError &&
    (error.status === 404 || error.raw?.response?.status === 404)
  ) {
    return notFound()
  }
  throw error
}

const defaultErrorRenderer = (error: any) => {
  return createElement(
    NormalContainer,
    null,
    createElement(
      'p',
      { className: 'text-center text-red-500' },
      error.message,
    ),
  );
};

// Unified handling request, error renderer and error handler 
// return function component
export const definePrerenderPage =
  <Params extends {}>() =>
    <T = {}>(options: {
      fetcher: (params: Params) => Promise<T>;
      Component: FC<NextPageParams<Params> & { data: T }>;
      errorRenderer?: (error: any, params: Params) => ReactNode | void;
      requestErrorHandle?: (
        error: RequestError,
        parsed: {
          status: number;
          bizMessage: string;
        },
        params: Params,
      ) => ReactNode | void;
      handleNotFound?: boolean;
    }) => {
      const {
        errorRenderer = defaultErrorRenderer,
        fetcher,
        Component,
        handleNotFound = true,
      } = options;
      return async (props: any) => {
        const { params, searchParams } = props as NextPageParams<Params, any>;

        try {
          const data = await fetcher({
            ...params,
            ...searchParams,
          });

          return createElement(
            Component,
            {
              data,
              ...props,
            },
            props.children,
          );
        } catch (error: any) {
          if (error?.message === 'NEXT_NOT_FOUND') {
            notFound();
          }

          if (error instanceof RequestError) {
            if (error.status === 404 && handleNotFound) {
              notFound();
            }

            return (
              options.requestErrorHandle?.(
                error,
                {
                  bizMessage: getErrorMessageFromRequestError(error),
                  status: error.status,
                },
                params,
              ) ??
              createElement(BizErrorPage, {
                status: error.status,
                bizMessage: getErrorMessageFromRequestError(error),
              })
            );
          }

          console.error('error in fetcher:', error);
          return errorRenderer(error, params) ?? defaultErrorRenderer(error);
        }
      };
    };
