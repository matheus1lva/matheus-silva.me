import React from "react"
import Image from 'next/image';
import { rhythm } from "./utils/typography"
import config from './config';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	.image-wrapper {
		border-radius: 50%;
		margin: 0;
	}

`;

const Bio = () => {
  return (
    <Wrapper>
			<Image
				className={'image-wrapper'}				
				alt={config.author.name}
				src={"/profile-pic.jpg"}
				width={40}
				height={50}
			/>
      <p>
        Written by <strong>{config.author.name}</strong> {config.author.summary}
        {` `}
        <a href={`https://twitter.com/${config.social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Wrapper>
  )
}

export default Bio
