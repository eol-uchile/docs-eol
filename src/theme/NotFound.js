import React from 'react';
import NotFound from '@theme-original/NotFound';
import './error404.css';
import Layout from '@theme/Layout';

export default function NotFoundWrapper() {
  return (
      // <>
      //   <NotFound {...props} />
      // </>
    <Layout>
      <div id="mainError">
        <div class="fof">
          <h1>Error 404</h1>
        </div>
      </div>
    </Layout>

  );
}