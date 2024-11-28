import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <body className="dark max-w-3xl mx-auto pt-10">
        <div>
          <div className="h-10 bg-dark-foreground w-full rounded-t-lg items-center pl-2 flex gap-1">
            <div className='h-5 w-5 rounded-full bg-[#ff0000d5]' />
            <div className='h-5 w-5 rounded-full bg-[#10da10]' />
            <div className='h-5 w-5 rounded-full bg-[#ffbb00]' />
          </div>
          <div
            className="max-h-[600px] h-full text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
            onClick={onClickAnywhere}
          >
            <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
              <Component {...pageProps} inputRef={inputRef} />
            </main>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
