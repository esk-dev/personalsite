import Head from "next/head";

const Page = ({ children, title }) => {
  const t = `${title} - EgorSk`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}
      {children}
    </>
  );
};

export default Page
