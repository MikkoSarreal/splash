import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layouts";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "../components/heading";
import Link from "../components/link";

const Main = styled.main`
  background-color: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const InfoBlock = styled.div`
  position: absolute;
  bottom: 40px;
  color: #FFF;
  margin: 20;
  text-align: center;

  p {
    font-size: 0.9rem;
  }
`

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Professional Wiper Blade" lang="en"></Seo>
      <Main>
        <StaticImage
          loading={"eager"}
          src={"../images/icon.png"}
          alt="Prowiper"
          placeholder={"none"}
          width={200}
        />
        <Heading>
          WEBSITE COMING SOON
        </Heading>

        <InfoBlock>
          <p>
            For questions or enquiries please contact <Link url="mailto:info@prowiper.com.au">info@prowiper.com.au</Link> 
          </p>
        </InfoBlock>
      </Main>
    </Layout>
  );
};

export default IndexPage;
