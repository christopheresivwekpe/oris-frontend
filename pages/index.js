import NavBar from "../components/NavBar";
import Link from "next/link";
import { whyData, stepData, moreData } from "../data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ButtonLink } from "../components/Button";
import { 
    Container, Header, Span, H1, H2, H3, NextImage, 
    Img, Section
} from "../styles/generalStyle";

export default function LandingPage() {
    return(
        <Section block="true" fullw="true" hideX absolute="true" left0 top0>

            {/** HEADER COMPONENTS */}
            <Header fit="true" fullw="true" flex column="true" aCenter ligthBG relative="true" z2>

                <NavBar />

                <Container fullw="true" block="true" primaryBG fit="true" relative="true">
                    <Container fullw="true" flex jCenter dM118PXtb mM90PXtb>
                        <H1 headingW block="true" fit="true" lHeight5 center font12M font15MM font16D 
                        font22DD mPd15rl lighter>
                            Join a community&#160;
                            <Span mNone mmNone dNone inline middle>
                                <NextImage src="/oris-icon.svg" height={57} width={53} alt="" />
                            </Span>
                            <Span ddNone mmNone mNone inline middle>
                                <NextImage src="/oris-icon.svg" height={50} width={46} alt="" />
                            </Span>
                            <Span ddNone dNone mNone inline middle>
                                <NextImage src="/oris-icon.svg" height={47} width={43} alt="" />
                            </Span>
                            <Span dNone mmNone ddNone inline middle>
                                <NextImage src="/oris-icon.svg" height={44} width={40} alt="" />
                            </Span>
                            &#160;of&#160;
                            <Span lHeight5 font12M font15MM font16D font22DD bold800>
                                salespeople helping brands reach their customers
                            </Span>&#160;
                            quickly, efficiently and reliably.
                        </H1>
                    </Container>

                    <Container ddFlex dFlex mmBlock mBlock fullw="true" fit="true" dPd4l ddPd5l dddPd8l>
                        <Container block="true" fit="true" subHeadW mPd15rl mM15b mmM165b dM254br>
                            <Container block="true" fullw="true" fit="true" lHeight5 font4M font6D mM3b dM4b>
                                Plug into an end-to-end sales ecosystem powered by people, data and trust. 
                                Optimize your salesforce across all regions.
                            </Container>
                            <Container block="true" fullw>
                                <Link href="/" passHref>
                                    <ButtonLink lHeight2 sFontD>
                                        Get Started&#160;
                                        <Span lightFont font4D>
                                            <AiOutlineArrowRight />
                                        </Span>
                                    </ButtonLink>
                                </Link>
                            </Container>
                        </Container>

                        <Container block="true" mPd15rl fit="true" mFullW noWrap mScroll dHide absolute="true" mLeft0 
                        mBottom_192PX mmLeft450PX mmBottom_150PX ddBottom_255PX ddLeft500PX>

                            <Container inlineflex aEnd BgImage1 BgPos1 BgSz1 BgRepeat1 image1H 
                            relative="true" image1W>
                                <Section flex aEnd jBetween fiveRadius fullw="true" dPd225rl mPd15rl absolute="true" bottom12>
                                    <Container block>
                                        <Container block="true" lightFont lHeight2 bold600 font12DD font8D font10M>
                                            Oluchi<br />Chibuzor
                                        </Container>
                                        <Container block="true" lightFont lHeight4 font2DD font1D font2M>
                                            Mid-level Sales Rep
                                        </Container>
                                    </Container>

                                    <Container flex column="true" aCenter>
                                        <Container block="true" lightFont bold600 font30DD font20D font22M lHeight53px>
                                            3
                                        </Container>
                                        <Container block="true" lightFont font5D lHeight5 font2D font3DD font3M>
                                            Years
                                        </Container>
                                    </Container>
                                </Section>
                            </Container>

                            <Container inlineflex aEnd BgImage2 BgPos1 BgSz1 BgRepeat1 image1H 
                            relative="true" image2W dM1875rl mM125rl fiveRadius>
                                <Section block="true" fullw="true" absolute="true" dPd225rl mPd15rl bottom12>
                                    <Container block="true" lightFont lHeight2 bold600 font11DD font7D font9M>
                                        Francis<br />Ayooluwa
                                    </Container>
                                    <Container block="true" lightFont lHeight4 font2DD font1D font2M>
                                        Senior Sales Rep
                                    </Container>
                                </Section>
                            </Container>

                            <Container inlineflex aEnd BgImage3 BgPos1 BgSz1 BgRepeat1 image1H 
                            relative="true" image2W fiveRadius>
                                <Section block="true" fullw="true" absolute="true" dPd225rl mPd15rl bottom12>
                                    <Container block="true" lightFont lHeight2 bold600 font11DD font7D font9M>
                                        Aisha<br />Calistus
                                    </Container>
                                    <Container block="true" lightFont lHeight4 font2DD font1D font2M>
                                        Sales Assisstant
                                    </Container>
                                </Section>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Header>



            {/** SECTION 1 */}
            <Section block="true" fullw="true" mPd3515 dPd4 darkBG fit="true" ddM2425t dM15625t mmM19t 
            mM17375t dddPd684 ddPd45 relative="true">
                <Container block="true" fit="true" mM15b mmM10b dddM19b ddM15b dM12b>
                    <H2 block="true" fullw="true" fit="true" lHeight2 bold font12M font17MM font18D 
                    font24DD mM3b dM4b lightFont>
                        Maximize Sales. <br />
                        Minimize Leakage. <br />
                        Optimize control. <br />
                    </H2>
                    <Container block="true" fullw>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 sFontD>
                                Join Oris Today&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                </Container>

                <Container flex aEnd fullw="true" absolute="true" mmLeft15 ddBottom_110PX 
                mmBottom_80PX hide mmmBottom_60PX mBottom_80PX>
                    <Container flex aEnd image3H image3W>
                        <Img src="/pexels-ono-kosuki-5647296.jpg" fullw="true" fullh="true" alt="" />
                    </Container>
                    <Container block="true" deco1BG fit="true" fiveRadius>
                        <Container block="true" fullw="true" dddPd87PX ddPd72PX 
                        dPd43PX mmPd43PX mPd43PX BgImage4>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                53%
                            </Container>
                            <Container block="true" font4M bold lHeight1 
                            font2M font3D font4DD font6DDD>
                                Revenue growth
                            </Container>
                        </Container>
                        <Container block="true" fullw="true" dddPd32PX ddPd27PX 
                        dPd30PX mmPd30PX mPd30PX BgImage4>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                60%
                            </Container>
                            <Container block="true" font4M bold lHeight1 
                            font2M font3D font4DD font6DDD>
                                Reduction in lost sales and theft
                            </Container>
                        </Container>
                        <Container block="true" fullw="true" dddPd61PX 
                        dPd16PX ddPd51PX mmPd16PX mPd16PX>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                10x
                            </Container>
                            <Container block="true" font4M bold 
                            lHeight1 font2M font3D font4DD font6DDD>
                                Reduction in staff turnover
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Section>



            {/** SECTION 2 */}
            <Section flex column="true" aCenter fullw="true" lightbg="true" fit="true" ddM17t dM12t mmM11t mM11t>
                <H2 block="true" bold600 center lHeight2 font14D font10M font11MM mM2b dM225b>
                    Why sell with&#160;
                    <Span mNone mmNone inline middle>
                        <NextImage src="/oris.svg" height={43} width={114} alt="" />
                    </Span>
                    <Span dNone ddNone inline middle>
                        <NextImage src="/oris.svg" height={32} width={90} alt="" />
                    </Span>?
                </H2>
                <Container block="true" center text1W lHeight6 font7D 
                font5M font6MM mPd15rl mM3b dM4b>
                    Oris focuses on improving your business with the 
                    four pillars of elite salesforces
                </Container>
                <Container flex fWrap jCenter fullw>
                    <Container flex fWrap jCenter fit="true" mM1625l dM1625l>
                        {
                        whyData.map((data) => (
                            <Container flex fWrap key={data.id} jCenter fit="true">
                                <Container block="true" text2W text2H primaryBG fiveRadius 
                                mPd40PX dPd40PX mM1625rb dM1625rb>
                                    <Container darkFont block="true" bold600 fullw="true" 
                                    font9D font7M font8MM mM175b dM1875b>
                                        {data.title1}
                                    </Container>
                                    <Container darkFont block="true" fullw="true" font3M fontMM 
                                    font4D lHeight6>
                                        {data.body1}
                                    </Container>
                                </Container>

                                <Container block="true" text2W text2H primaryBG fiveRadius 
                                mPd40PX dPd40PX mM1625rb dM1625rb>
                                    <Container darkFont block="true" bold600 fullw="true" font9D 
                                    font7M font8MM mM175b dM1875b>
                                        {data.title2}
                                    </Container>
                                    <Container darkFont block="true" fullw="true" font3M fontMM font4D lHeight6>
                                        {data.body2}
                                    </Container>
                                </Container>
                            </Container>
                        ))
                        }
                    </Container>
                </Container>
            </Section>



            {/** SECTION 3 */}
            <Section flex column="true" fullw="true" lightbg="true" fit="true" ddM11t dM10t mmM8t mM6t>
                <Container block="true" fullw="true" fit="true" mPd15rl dPd4l ddPd5l dddPd8l dM2b mM1_5b mmM3b>
                    <H2 block="true" full lHeight3 font12M font17MM font18D font24DD>
                        Early adopters&#160;
                        <Span mNone mmNone dNone inline middle>
                            <NextImage src="/oris-icon.svg" height={82} width={77} alt="" />
                        </Span>
                        <Span ddNone mmNone mNone inline middle>
                            <NextImage src="/oris-icon.svg" height={57} width={53} alt="" />
                        </Span>
                        <Span ddNone dNone mNone inline middle>
                            <NextImage src="/oris-icon.svg" height={50} width={46} alt="" />
                        </Span>
                        <Span dNone mmNone ddNone inline middle>
                            <NextImage src="/oris-icon.svg" height={47} width={43} alt="" />
                        </Span>
                        &#160;have reported...
                    </H2>
                </Container>
                <Container mBlock mmBlock fit="true" dFlex ddFlex fullw="true" mPd15rl dPd4l ddPd5l dddPd8l>
                    <Container block="true" text3W fit="true" mM1b ddM0875r dddM0>
                        <H3 block="true" fullw="true" fit="true" bold600 font5M font6MM font8DD font7D lHeight4 mM05b 
                        dM41tb dddM915tb ddM615tb>
                            <Span mNone mmNone inline middle>
                                <NextImage src="/oris-icon.svg" height={52} width={50} alt="" />
                            </Span>
                            <Span mNone ddNone dNone inline middle>
                                <NextImage src="/oris-icon.svg" height={40} width={38} alt="" />
                            </Span>
                            <Span ddNone mmNone dNone inline middle>
                                <NextImage src="/oris-icon.svg" height={37} width={36} alt="" />
                            </Span>&#160;
                            FMCGs
                        </H3>
                        <Container block="true" fullw="true" font6DD font5D font5MM font4M lHeight5 mM3b fit="true" dM4b>
                            Plug into an end-to-end sales ecosystem powered by people, data and trust. 
                            Optimize your salesforce across all regions.
                        </Container>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 sFontD pd2>
                                Hire Top Sales Reps&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                    <Container block="true" image5H image5W>
                        <Img src="illus1.svg" alt="" fullw="true" fullh="true" />
                    </Container>
                </Container>
            </Section>



            {/** SECTION 4 */}
            <Section flex column="true" aCenter lightbg="true" fullw="true" ddM11t dM10t mmM8t mM6t fit="true">
                <Container fullw="true" block="true" center lHeight4 font13DD font12D bold 
                font11MM font9M mM2b dM3b mPd15rl>
                    We are trusted by Top Companies
                </Container>
                <Container fullw="true" flex jCenter aCenter fit="true" scroll primaryBG>
                    <Container block="true" noWrap fit="true" dM2l scroll>
                        <Container inline middle image6W dM2r mM15r>
                            <Img src="l5.png" alt="" fullw="true" fullh="true" />
                        </Container>
                        <Container inline middle image7W dM2r mM15r>
                            <Img src="l4.png" alt="" fullw="true" fullh="true" />
                        </Container>
                        <Container inline middle image8W dM2r mM15r>
                            <Img src="l2.png" alt="" fullw="true" fullh="true" />
                        </Container>
                        <Container inline middle image9W dM2r mM15r>
                            <Img src="l3.png" alt="" fullw="true" fullh="true" />
                        </Container>
                    </Container>
                </Container>
            </Section>



            {/** SECTION 5 */}
            <Section flex column="true" aCenter lightbg="true" fullw="true" ddM11t dM10t mmM8t mM6t fit="true">
                <Container block="true" fullw="true" fit="true" mPd15rl dPd4r ddPd5r dddPd8r dM2b mM1_5b mmM3b>
                    <H2 mBlock dFlex ddFlex full dJEnd lHeight3 font12M font17MM font18D font24DD>
                        Launch&#160;
                        <Span mNone mmNone dNone inline middle>
                            <NextImage src="/oris-icon.svg" height={82} width={77} alt="" />
                        </Span>
                        <Span ddNone mmNone mNone inline middle>
                            <NextImage src="/oris-icon.svg" height={57} width={53} alt="" />
                        </Span>
                        <Span ddNone dNone mNone inline middle>
                            <NextImage src="/oris-icon.svg" height={50} width={46} alt="" />
                        </Span>
                        <Span dNone mmNone ddNone inline middle>
                            <NextImage src="/oris-icon.svg" height={47} width={43} alt="" />
                        </Span>
                        &#160;your sales career
                    </H2>
                </Container>
                <Container flex fit="true" fullw="true" jEnd aEnd mPd15rl mRColumn
                dPd4r ddPd5r dddPd8r>
                    <Container block="true" image6H image5W>
                        <Img src="illus2.png" alt="" fullw="true" fullh="true" />
                    </Container>
                    <Container block="true" text3W fit="true" mM2b dM075l ddM075l>
                        <H3 block="true" fullw="true" fit="true" bold600 font5M font6MM font8DD font7D lHeight4 mM05b 
                        dM41tb dddM915tb ddM615tb>
                            <Span mNone mmNone inline middle>
                                <NextImage src="/oris-icon.svg" height={52} width={50} alt="" />
                            </Span>
                            <Span mNone ddNone dNone inline middle>
                                <NextImage src="/oris-icon.svg" height={40} width={38} alt="" />
                            </Span>
                            <Span ddNone mmNone dNone inline middle>
                                <NextImage src="/oris-icon.svg" height={37} width={36} alt="" />
                            </Span>&#160;
                            Sales Reps
                        </H3>
                        <Container block="true" fullw="true" mM3b fit="true" dM225b>
                            <Container block="true" fullw="true" mM1_5b dM15b font6DD font5D font5MM font4M lHeight4 fit="true">
                                Elevate your sales experience working for Top Brands. We bring you the jobs, 
                                the training and the resources, so you can excel at what you do best. Sales.
                            </Container>
                            <Span inline font6DD font5D font5MM font4M lHeight4 bold>
                                Learn More. Earn More. <br />Share More.
                            </Span>
                        </Container>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 sFontD>
                                Get Started&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                </Container>
            </Section>



            {/** SECTION 6 */}
            <Section block="true" fullw="true" lightbg="true" mPd415 dddPd16810 ddPd1058 dPd944 fit="true">
                <Container flex column="true" aCenter darkBG fullw="true" dddPd46885313 ddPd3753 fit="true"
                dPd3753 mmPd3753 mPd3753>
                    <Container lightFont block="true" text4W lHeight3 center font15D font17DD font14MM 
                    font10M dM4b mmM3b mM2b>
                        Join a community of like-minded sales specialists.
                    </Container>
                    <Container flex deco2BG text5W text5H lHeight aCenter jCenter 
                    font6DD font5D font5MM bold fiveRadius dM5b mmM4b mM3b>
                        Get started in 3 easy steps
                    </Container>
                    <Container mBlock mmBlock dFlex ddFlex jBetween aCenter fullw>
                        {
                            stepData.map((data) => (
                                <Container key={data.id} flex aCenter fit="true" mmM15b mM1_5b>
                                    <Container flex aCenter jCenter text7W text7H halfRadius 
                                    font13DDD font11D font10MM font8M lightFont
                                    style={{ border: `1px solid ${data.color}`}}>
                                        {data.id}
                                    </Container>
                                    
                                    <Container block="true" font6DDD font4DD font4D font5MM font4M 
                                    lightFont lHeight5 fit="true" text6W={data.id === 1} text8W={data.id === 2} 
                                    text9W={data.id === 3} dddM1125l dM075l mmM0875l mM075l>
                                        {data.body}
                                    </Container>
                                </Container>
                            ))
                        }
                    </Container>
                </Container>
            </Section>
        </Section>
    );
}