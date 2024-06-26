import React from 'react';
import Script from 'next/script';

function GoogleAnalytics() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-G74TDXL09B'
      ></Script>
      <Script>
        {/* window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-G74TDXL09B'); */}

        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G74TDXL09B', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
