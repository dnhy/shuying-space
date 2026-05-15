import { clsxm } from '@/lib/helper';

export type LoadingProps = {
  loadingText?: string;
  useDefaultLoadingText?: boolean;
};

const defaultLoadingText = '别着急';
export const Loading: Component<LoadingProps> = ({
  loadingText,
  className,
  useDefaultLoadingText = false,
}) => {
  const nextLoadingText = useDefaultLoadingText
    ? defaultLoadingText
    : loadingText;

  return (
    <div className={clsxm(className)}>
      <span>{nextLoadingText && <span>{nextLoadingText}</span>}</span>
    </div>
  );
};

export const FullPageLoading = () => <Loading useDefaultLoadingText />;
