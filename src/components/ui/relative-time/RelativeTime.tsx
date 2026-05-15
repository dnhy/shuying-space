'use client'

import { parseDate, relativeTimeFromNow } from "@/lib/datetime";
import dayjs from "dayjs";
import { Fragment, useEffect, useState, type FC } from "react";

const formatTime = (date: string | Date, relativeBforeDay?: number) => {
  if (relativeBforeDay && Math.abs(dayjs(date).diff(new Date(), 'd')) > relativeBforeDay) {
    return parseDate(date, 'YYYY 年 M 月 D 日 dddd');
  }

  return relativeTimeFromNow(date)
}

export const RelativeTime: FC<{
  date: string | Date
  displayAbsoluteTimeAfterDay?: number
}> = (props) => {
  const { displayAbsoluteTimeAfterDay = 29 } = props;

  const [relative, setRelative] = useState<string>(
    formatTime(props.date, displayAbsoluteTimeAfterDay),
  )

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRelative(formatTime(props.date, displayAbsoluteTimeAfterDay))
    let timer: any = setInterval(() => {
      setRelative(formatTime(props.date, displayAbsoluteTimeAfterDay))
    }, 1000)

    return () => {
      timer = clearInterval(timer);
    }
  }, [props.date, displayAbsoluteTimeAfterDay])


  return <Fragment>{relative}</Fragment>

}
