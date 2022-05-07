import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledWrapper = styled.div`
    width: 100%;
    padding: 10rem 0rem;
    background: linear-gradient(
            129.54deg,
            rgba(255, 255, 255, 0.09) -8.83%,
            rgba(255, 255, 255, 0.0135) 42.3%,
            rgba(255, 255, 255, 0.09) 83.85%
        ),
        #2b2942;
`

const StyledAboutComponent = styled.div`
    gap: 5rem;
    display: flex;
    max-width: 140rem;
    padding: 8rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    &.reversed {
        flex-direction: row-reverse;
    }
    & > div {
        h2 {
            color: #fff;
            max-width: 50rem;
            font-size: 4rem;
            font-weight: 400;
            font-family: 'cocogoose';
            span {
                font-weight: bold;
                font-size: 6rem;
                color: #7598ec;
                /* background: linear-gradient(
                    91.6deg,
                    #7598ec 48.65%,
                    #fca9c7 110.03%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text; */
            }
        }
        h3 {
            font-size: 3rem;
            font-weight: normal;
            color: #fff;
            max-width: 50rem;
            line-height: 4.5rem;
        }
        p {
            font-size: 2.4rem;
            padding-bottom: 1.5rem;
            color: #fff;
            &.conclusion {
                font-size: 3.2rem;
                font-weight: 500;
                span {
                    font-size: 3.2rem;
                    font-weight: 500;
                    white-space: nowrap;
                    background: linear-gradient(
                        91.6deg,
                        #7598ec 48.65%,
                        #fca9c7 110.03%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            }
        }
        &:nth-child(1) {
            flex: 1.5;
        }
        &:nth-child(2) {
            flex: 1;
        }
        @media screen and (max-width: 840px) {
            h2 {
                font-size: 3rem;
                max-width: 100%;
                span {
                    font-size: 5rem;
                }
            }
            h3 {
                font-size: 3rem;
            }
        }
    }
    @media screen and (max-width: 800px) {
        display: block;
        padding: 4rem;
        .image-container {
            padding: 5rem 0rem 0rem 0rem;
            max-width: 40rem;
            margin: 0 auto;
        }
    }
`

const About: React.FC = () => {
    return (
        <StyledWrapper>
            <StyledAboutComponent>
                <div>
                    <h2>
                        As we ascend into a{' '}
                        <span>brand new boundless world…</span>
                    </h2>
                    <h3>
                        We revere the essential elements of our current world:
                    </h3>
                </div>
                <div className="image-container">
                    <Image
                        src="/about-orb.webp"
                        width="800"
                        height="751"
                        alt="The elements make up the current world"
                    />
                </div>
            </StyledAboutComponent>
            <StyledAboutComponent className="reversed">
                <div>
                    <p>
                        DolphinArc envisions a future for all &ndash; blending
                        the talent of traditional architects with the infinite
                        possibilities of living life on a different tangent
                        &ndash; in the Metaverse.
                    </p>
                    <p className="conclusion">
                        Join us in bringing to life a reimagined inclusive{' '}
                        <span>future for all</span>.
                    </p>
                </div>
                <div className="image-container">
                    <Image
                        src="/dolphin-orb.webp"
                        width="800"
                        height="800"
                        alt="Dolphin Arc"
                    />
                </div>
            </StyledAboutComponent>
        </StyledWrapper>
    )
}

export default About
