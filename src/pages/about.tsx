import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Helmet } from "react-helmet"

const Title = styled.h4`
  margin: 0;
`

const ContentWithNoMargin = styled.p`
  margin: 0;
`

const Justified = styled.div`
  text-align: justify;
`

const SocialsWrapper = styled.div`
  > a {
    margin-right: 10px;
  }
`

const ExperiencesBlock = styled.div`
  margin-bottom: 20px;
`

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Matheus Silva - About</title>
      </Helmet>
      <Justified>
        <div>
          <h3>Who am i</h3>
          <p>
            I'm a open source oriented developer, i tend to whatever i do think
            about others first and think if anything that can be done can be
            open sourced. SInce the beginning this made me grow so much! I was
            capable of learning best practices in all scenarios, new tools, new
            ways of coding! Everything! The way that a product and a project
            should grow is end user first!
          </p>
        </div>

        <div>
          <h3>Side interests</h3>
          <p>
            Apart from tech i'm also into crypto, including defi, yield farm,
            and everything related to blockchains! I'm currently learning
            react-native and solidty/web3js side by side on a side projetct i'm
            developing! This is being done in cooperation with a friend
            designer! We aim to deliver some really good UX and a product that
            actually works. We used our own needs and some friends opinions to
            shape up the interations and features!
          </p>
        </div>

        <div>
          <h3>Socials</h3>
          <SocialsWrapper>
            <a href="https://www.github.com/PlayMa256">
              <FaGithub size={"25"} />
            </a>
            <a href="https://www.linkedin.com/in/matheusgsilva">
              <FaLinkedin size={"25"} />
            </a>
            <a href="https://twitter.com/matheus1lva">
              <FaTwitter size={"25"} />
            </a>
          </SocialsWrapper>
        </div>

        <div>
          <h3>Talks</h3>

          <Title>Webpack and the state of bundlers - ReactConfBR</Title>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yeiT_z1Twt8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h3>Education</h3>
          <Title>State University of Campinas</Title>
          <ContentWithNoMargin>
            Bachelor on Systems information - 2013
          </ContentWithNoMargin>
        </div>

        <div>
          <h3>Experiences</h3>

          <ExperiencesBlock>
            <Title>Software Developer - Ifood</Title>
            <ContentWithNoMargin>
              <p>
                {" "}
                I'm working primarly on the main website, particularly on the
                checkout and payment section. Performing frontend development
                and doing an end to end deployment on different staging
                platforms (from staging to production).
              </p>{" "}
              <p>
                Predominantly my job is to help the product to scale, with
                multiple teams coding into the same project, it is my job to
                create, modify and add ways to scale the product better, adding
                security updates; improving DX and updating the continuously
                deployment that already exists.
              </p>
            </ContentWithNoMargin>
          </ExperiencesBlock>

          <ExperiencesBlock>
            <Title>Software Developer - Daitan</Title>
            <ContentWithNoMargin>
              <p>
                Working primarily as a frontend developer, but doing work not
                related to the frontend, such as DevOps (deploying applications
                with docker), configuring Jenkins pipelines, debugging java code
                (spring-boot and apache camel).
              </p>
              <p>
                I'm currently managing the development of two projects, where I
                have the opportunity to discuss with main stakeholders the needs
                of the project and it's requirements and also decides on the
                technologies used. By doing this, I managed to introduce a type
                system on this project and influence the rest of the team with
                other projects. I've been going through lots of projects where
                my main goal is always to become the main person there! I want
                to be the very best and help everyone as their needs!
              </p>
              <p>
                I have also the experience to manage products, deal with
                blockers between teams, and manage stakeholders' expectations.
                I've been having the role of project management, project leader,
                and also Tech lead! I want to add the most value as possible to
                the products! Recently in cooperation with Paulo Campelo Selano,
                we introduced a design system based on the atomic design, to
                create shared components across other portals and products to
                keep the same/similar visual identity and increase the
                development speed! The whole design system is being developed
                and built on top of a monorepo architecture (with Lerna + yarn),
                where each component is a folder and independent from the
                others, but they all share common dependencies and have a common
                release flow! Each of the components is built with
                styled-components, to allow theme customization and decrease the
                chances of class name collision! Now that the project is in a
                stable state, new developers are coming in to integrate and
                create other components for their own requirements!
              </p>
            </ContentWithNoMargin>
          </ExperiencesBlock>

          <ExperiencesBlock>
            <Title>Intern Software developer - Daitan</Title>
            <ContentWithNoMargin>
              <p>
                During the internship i was able to get in touch with what the
                market was using in terms of tech, before that i had just read
                about, some of the techs i had never touched.
              </p>
              <p>
                I started writting tests and some testing utils in python, those
                scripts where part of the custom built framework on top of robot
                framework. I got moved to a frontend project where i started
                working with react, later on i was able to handle the management
                of project and do the entire development, from contacting the
                client, gathering requirements to deliverying.
              </p>
              <p>
                Then i moved to the frontend team, which i was able to learn
                really fast how to actually use react and redux, redux-sagas and
                redux-form. Within a month there, i was able to get a project to
                work just by myself and directly in touch with the client,
                getting feedback from them and working by myself.
              </p>
              <p>
                After that project, i was rellocated to another team, where i
                was able to lead a small team to finish that project.
              </p>
            </ContentWithNoMargin>
          </ExperiencesBlock>

          <ExperiencesBlock>
            <Title>Freelancer</Title>
            <ContentWithNoMargin>
              Working as a freelance for various clients, I was able to build
              and improve some skills: self-taught; self-management; manage time
              correctly; communication skills; time measuring; estimate projects
              correctly. I worked with a basic stack a the time being it: PHP,
              HTML, Mysql, Postgres, MongoDB, jquery
            </ContentWithNoMargin>
          </ExperiencesBlock>
        </div>
      </Justified>
    </Layout>
  )
}

export default AboutPage
