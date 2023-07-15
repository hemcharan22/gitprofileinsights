import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../style';

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }
    // exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
