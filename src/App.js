import React from 'react';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "./App.css";
import 'swiper/css';

import useMetamask from './hooks/useMetamask';

import SwiperNav from './Components/SwiperNav';
import FaqItem from './Components/FaqItem';
import Marquee from './Components/Marquee';

const App = () => {
    const [step, setStep] = React.useState(1);
    const [telegram, setTelegram] = React.useState("");
    const [twitter, setTwitter] = React.useState("");
    const [complete, setComplete] = React.useState(true);

    const {isLoading, connect, setSocial, checkComplete} = useMetamask();

    React.useEffect(() => {
        const close = () => {
            $(".menu__inner").removeClass("active");
            $(".mobile__menu").removeClass("active");
        }

        $(".go").on("click", function(e){
            e.preventDefault();
            close();
            let point = $(this).attr("data-point");
            let pointTop = $("#"+point).offset().top;
            $('body,html').animate({scrollTop: pointTop}, 500);
        });

        $(".faq__item").on("click", function(e){
            e.preventDefault();

            if($(this).hasClass("active")){
                $(this).removeClass("active");
                $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
            }else{
                $(".faq__item").removeClass("active");
                $(".faq__item").children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
                $(this).addClass("active");
                $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("-");
            }
        });

        $(".menu__inner").on("click", function(){
            $(this).toggleClass("active");
            $(".mobile__menu").toggleClass("active");
        });

        const tokenSupply = $(".token__points--title").text().trim();
        const tokenSupplyValue = $(".token__points--value").text().trim();

        const chartTitle = $(".chart__info--title");
        const chartInfo = $(".chart__info--value");

        $(".unit").on("mouseenter", function(){
            const index = $(this).index();
            const current = $(".token__point").eq(index);

            current.addClass("active");
            chartInfo.text(current.children(".token__percent").text().trim());
            chartTitle.text(current.children(".token__point--wrapper").children(".token__name").text().trim());
        });

        $(".unit").on("mouseleave", function(e){
            const index = $(this).index();

            $(".token__point").eq(index).removeClass("active");

            chartTitle.text(tokenSupply);
            chartInfo.text(tokenSupplyValue);
        });

        $(".token__point").on("mouseenter", function(){
            const index = $(this).index();
            const current = $(".unit").eq(index);

            current.addClass("active");
            chartInfo.text($(this).children(".token__percent").text().trim());
            chartTitle.text($(this).children(".token__point--wrapper").children(".token__name").text().trim());
        });

        $(".token__point").on("mouseleave", function(){
            const index = $(this).index();

            $(".unit").eq(index).removeClass("active");

            chartTitle.text(tokenSupply);
            chartInfo.text(tokenSupplyValue);
        });
    }, []);

    React.useEffect(() => {
        checkComplete(setStep);
    }, []);

    return(
        <>
            <header className="header" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="header__inner">
                        <div className="menu__inner">
                            <img src="/assets/img/menu.svg" alt="menu" className="menu" />
                            <img src="/assets/img/cross.svg" alt="cross" className="cross" />
                        </div>

                        <a href="/" className="header__logo">
                            <img src="/assets/img/logo.png" alt="logo" className="logo" />
                        </a>

                        <nav className="header__menu">
                            <a href="#" className="header__menu--link go" data-point="about">About Us</a>
                            <a href="#" className="header__menu--link go" data-point="airdrop">Airdrop</a>
                            <a href="#" className="header__menu--link go" data-point="cock">CockNomics</a>
                            <a href="#" className="header__menu--link go" data-point="road">RoadMap</a>
                            <a href="#" className="header__menu--link go" data-point="social">Socials</a>
                            <a href="#" className="header__menu--link go" data-point="faq">FAQ</a>
                        </nav>

                        <button className="button header__button">
                            White paper
                        </button>

                        <div className="mobile__menu">
                            <a href="#" className="mobile__menu--link go" data-point="about">About Us</a>
                            <a href="#" className="mobile__menu--link go" data-point="cock">CockNomics</a>
                            <a href="#" className="mobile__menu--link go" data-point="road">RoadMap</a>
                            <a href="#" className="mobile__menu--link go" data-point="social">Socials</a>
                            <a href="#" className="mobile__menu--link go" data-point="faq">FAQ</a>

                            <div className="mobile__menu--social">
                                <a href="https://t.me/+0g7J7mpxjChlN2I0" target="_blank" className="social__item">
                                    <svg className="social__item--icon" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 2.7294C33 2.82935 33 2.92931 33 3.02926L29.1467 26.8184C29.0479 27.4181 28.6527 28.0178 28.1587 28.3177C27.3683 28.8174 26.479 28.8174 25.6886 28.3177L15.018 20.9211C14.2275 20.4213 14.1287 19.2218 14.8204 18.6221L24.7006 9.02652C24.8982 8.82661 24.8982 8.52674 24.7994 8.32684C24.6018 8.02697 24.2066 7.92702 23.9102 8.12693L10.7695 16.9229C9.28743 17.9224 7.50898 18.1223 5.82934 17.6226L0.889223 16.0233C0.395211 15.8234 0 15.3236 0 14.8239C0 14.524 0.0988031 14.3241 0.197606 14.1242C0.296408 13.9243 0.494013 13.7244 0.79042 13.6244L30.4311 0.830271C31.2216 0.530408 32.1108 0.730317 32.6048 1.33004C32.8024 1.72986 33 2.22963 33 2.7294Z" fill="#FFBD1D"/>
                                    </svg>
                                </a>

                                <a href="https://twitter.com/crazycockmeme" target="_blank" className="social__item">
                                    <svg className="social__item--icon" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35 3.37794C33.6351 3.97405 32.2702 4.47081 30.9053 4.47081C32.3677 3.57665 33.4401 2.18573 34.0251 0.496757C32.3677 1.49027 30.8078 2.08637 29.4429 2.28507C28.1755 0.894151 26.3231 0 24.2758 0C20.2785 0 17.0613 3.27859 17.0613 7.352C17.0613 7.94811 17.1588 8.5442 17.2563 9.04096C10.7242 8.64355 5.8496 5.96108 2.24236 1.39091C0.584976 5.16627 0.974942 8.54421 4.58219 11.2267C3.41227 11.2267 2.24236 10.9287 1.26743 10.3325C1.36492 14.0085 3.21728 16.393 7.01951 17.5852C6.04458 17.8832 4.97214 17.9826 3.80222 17.7839C4.77715 20.7644 7.01952 22.4534 10.5293 22.7515C7.60448 25.1359 4.09471 26.2288 0 25.8314C12.8691 33.9782 31.2953 25.9307 31.2953 7.25264C31.2953 7.15329 31.2953 7.15328 31.2953 7.05393C32.7577 6.25912 33.9276 4.96757 35 3.37794Z" fill="#FFBD1D"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="main" id="about">
                <div className="container">
                    <div className="main__inner">
                        <div className="main__img--inner" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/assets/img/main-cock.png" alt="cock" className="main__img" />
                        </div>

                        <div className="main__content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="main__title--inner">
                                <h1 className="main__title">
                                    <span>Crazy</span> Cock
                                </h1>

                                <p className="main__title--text">
                                    meme
                                </p>
                            </div>

                            <p className="main__text">
                                Is a deflationary memecoin launched on Ethereum. <br />The First Meme coin centered around a comically exaggerated rooster character with distinct and quirky attributes hopes to inspire millions of people around the world to invest money into tokens with the Cocks Image on it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Marquee />

            <section className="airdrop" id="airdrop" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="airdrop__inner">
                        <div className="airdrop__wrapper">
                            <h3 className="subtitle">Airdrop</h3>

                            <p className="airdrop__text">
                                Participate in Airdrop to get % of <span>$COCK</span>
                            </p>

                            <img src="/assets/img/coin.svg" alt="coin" className="airdrop__img" />
                        </div>

                        <div className="airdrop__content">
                            <p className="airdrop__subtitle">
                                {complete ? "Follow the steps to get involved" : "You have not completed all the tasks"}
                            </p>

                            {step === 1 && <div className="airdrop__connect">
                                <div className="airdrop__text--inner">
                                    <p className="airdrop__connect--text">
                                        Connect your wallet to participate
                                    </p>

                                    <img src="/assets/img/metamask.svg" alt="metamask" />
                                </div>

                                <button className={`button airdrop__item--button airdrop__connect--button ${isLoading ? " isloading" : ""}`} onClick={() => connect(setStep)}>
                                    Connect Metamask
                                </button>
                            </div>}

                            {step === 2 && <>
                                <div className="airdrop__items">
                                    <div className="airdrop__item">
                                        <p className="airdrop__item--text">
                                            Follow <span>to <span className="gold">Twitter</span></span>
                                        </p>

                                        <a href="https://twitter.com/crazycockmeme" target="_blank" className="airdrop__item--button">
                                            Twitter

                                            <svg viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_0_93)">
                                                    <path d="M6.72157 16.9949C14.6354 16.9949 18.952 10.4792 18.952 4.82272C18.952 4.63178 18.952 4.46472 18.9281 4.27378C19.7674 3.6771 20.4868 2.91336 21.0624 2.05415C20.295 2.38828 19.4556 2.62695 18.5923 2.72242C19.5036 2.19735 20.1751 1.362 20.5108 0.359588C19.6715 0.860795 18.7602 1.19493 17.777 1.40974C16.9856 0.574391 15.8584 0.0493164 14.6354 0.0493164C12.2613 0.0493164 10.3427 1.95868 10.3427 4.32151C10.3427 4.65565 10.3907 4.98979 10.4627 5.30006C6.86546 5.13299 3.69992 3.41457 1.58957 0.836928C1.22985 1.45747 1.01402 2.19735 1.01402 2.98496C1.01402 4.46472 1.78142 5.7774 2.93252 6.54115C2.23706 6.51728 1.56559 6.32634 0.990036 6.01607C0.990036 6.03994 0.990036 6.03994 0.990036 6.06381C0.990036 8.14024 2.47688 9.85866 4.44335 10.2644C4.08363 10.3599 3.69992 10.4076 3.31622 10.4076C3.02845 10.4076 2.76465 10.3837 2.50086 10.336C3.05243 12.0306 4.6352 13.2716 6.50574 13.2955C5.04288 14.4411 3.17234 15.1333 1.15791 15.1333C0.822167 15.1333 0.462447 15.1094 0.126709 15.0855C2.02123 16.2789 4.29946 16.9949 6.72157 16.9949Z" fill="black"/>
                                                </g>

                                                <defs>
                                                    <clipPath id="clip0_0_93">
                                                        <rect width="20.9597" height="16.9456" fill="white" transform="translate(0.126709 0.0493164)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="airdrop__item">
                                        <p className="airdrop__item--text">
                                            Retweet Pinned tweet
                                        </p>

                                        <p className="airdrop__item--subtext">
                                            @ 3 friends on the reply and tell them about CrazyCockmeme    
                                        </p>

                                        <a href="https://twitter.com/crazycockmeme" target="_blank" className="airdrop__item--button">
                                            Twitter

                                            <svg viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_0_93)">
                                                    <path d="M6.72157 16.9949C14.6354 16.9949 18.952 10.4792 18.952 4.82272C18.952 4.63178 18.952 4.46472 18.9281 4.27378C19.7674 3.6771 20.4868 2.91336 21.0624 2.05415C20.295 2.38828 19.4556 2.62695 18.5923 2.72242C19.5036 2.19735 20.1751 1.362 20.5108 0.359588C19.6715 0.860795 18.7602 1.19493 17.777 1.40974C16.9856 0.574391 15.8584 0.0493164 14.6354 0.0493164C12.2613 0.0493164 10.3427 1.95868 10.3427 4.32151C10.3427 4.65565 10.3907 4.98979 10.4627 5.30006C6.86546 5.13299 3.69992 3.41457 1.58957 0.836928C1.22985 1.45747 1.01402 2.19735 1.01402 2.98496C1.01402 4.46472 1.78142 5.7774 2.93252 6.54115C2.23706 6.51728 1.56559 6.32634 0.990036 6.01607C0.990036 6.03994 0.990036 6.03994 0.990036 6.06381C0.990036 8.14024 2.47688 9.85866 4.44335 10.2644C4.08363 10.3599 3.69992 10.4076 3.31622 10.4076C3.02845 10.4076 2.76465 10.3837 2.50086 10.336C3.05243 12.0306 4.6352 13.2716 6.50574 13.2955C5.04288 14.4411 3.17234 15.1333 1.15791 15.1333C0.822167 15.1333 0.462447 15.1094 0.126709 15.0855C2.02123 16.2789 4.29946 16.9949 6.72157 16.9949Z" fill="black"/>
                                                </g>

                                                <defs>
                                                    <clipPath id="clip0_0_93">
                                                        <rect width="20.9597" height="16.9456" fill="white" transform="translate(0.126709 0.0493164)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="airdrop__item">
                                        <p className="airdrop__item--text">
                                            Follow to <span className="gold">Telegram</span>
                                        </p>

                                        <p className="airdrop__item--subtext">
                                            send /start to the bot
                                        </p>

                                        <a href="https://t.me/cock_test95_bot" target="_blank" className="airdrop__item--button">
                                            Telegram

                                            <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5397 0.391744C19.4607 0.176941 19.3817 0.123241 19.2764 0.0963906C18.9867 -0.0378608 18.5128 0.123241 18.5128 0.123241C18.5128 0.123241 1.89732 6.21825 0.94937 6.88951C0.738714 7.02376 0.68605 7.13116 0.633387 7.21171C0.475395 7.69502 0.975702 7.90982 0.975702 7.90982L5.26781 9.33288C5.26781 9.33288 5.4258 9.35973 5.47846 9.33288C6.45274 8.71533 15.2739 3.02307 15.7742 2.83512C15.8532 2.80827 15.9059 2.83512 15.9059 2.88882C15.6953 3.61378 8.03266 10.568 8.03266 10.568C8.03266 10.568 8.00633 10.5948 7.98 10.6485L7.58502 14.9714C7.58502 14.9714 7.42703 16.2871 8.71729 14.9714C9.63891 14.0317 10.5342 13.253 10.9555 12.8771C12.4564 13.8974 14.0363 15.052 14.721 15.6427C15.0633 15.938 15.3529 15.9918 15.5899 15.9918C16.2482 15.9649 16.4325 15.2399 16.4325 15.2399C16.4325 15.2399 19.4344 2.80827 19.5397 1.14355C19.5397 0.982449 19.566 0.875048 19.566 0.767647C19.566 0.606546 19.566 0.472294 19.5397 0.391744Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <button className="button airdrop__item--button airdrop__check" onClick={() => setStep(3)}>
                                    Check
                                </button>
                            </>}

                            {step === 3 && <div className="airdrop__connect">
                                <div className="check__text--inner">
                                    <p className="check__title">Enter your Twitter and Telegram username</p>
                                    <p className="check__text">as in this example @cockmeme123</p>
                                </div>

                                <div className="check__inputs">
                                    <input value={twitter} onChange={e => setTwitter(e.target.value)} type="text" className="input check__input" placeholder="Twitter username" />

                                    <input value={telegram} onChange={e => setTelegram(e.target.value)} type="text" className="input check__input" placeholder="Telegram username" />
                                </div>

                                <div className="air__wrap">
                                    <button className="button airdrop__item--button airdrop__check" onClick={() => setStep(2)}>
                                        Back
                                    </button>

                                    <button className="button airdrop__item--button airdrop__check" onClick={() => setSocial(twitter, telegram, () => setStep(4), () => {
                                        setStep(2);
                                        setComplete(false);
                                    })}>
                                        Сheck
                                    </button>
                                </div>
                            </div>}

                            {step === 4 && <div className="airdrop__connect">
                                <p className="check__title">You are already included in the airdrop. Follow us on Twitter for updates</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </section>

            <section className="token" id="cock" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="token__inner">
                        <div className="chart__inner">
                            <svg className="chart" viewBox="0 0 50 50">
                                <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                                <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                                <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                                <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                                <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
                            </svg>

                            <img src="/assets/img/farm.png" alt="farm" className="chart__img" />

                            <div className="chart__info">
                                <p className="chart__info--title">Token Supply</p>

                                <p className="chart__info--value">500,000,000,000,000</p>
                            </div>
                        </div>

                        <div className="token__content">
                            <div className="token__name--inner">
                                <p className="subtitle">Token Name:</p>

                                <p className="token__cock">$Cock&rsquo;</p>
                            </div>

                            <div className="token__points--inner">
                                <div className="token__points--title--inner">
                                    <p className="token__points--title">
                                        Token Supply
                                    </p>

                                    <p className="token__points--value">
                                        500,000,000,000,000
                                    </p>
                                </div>

                                <div className="token__points">
                                    <div className="token__point">
                                        <div className="token__point--wrapper">
                                            <p className="token__num">1</p>

                                            <p className="token__name">Liquidity Pool</p>
                                        </div>

                                        <p className="token__percent">40%</p>
                                    </div>

                                    <div className="token__point">
                                        <div className="token__point--wrapper">
                                            <p className="token__num">2</p>

                                            <p className="token__name">Presale</p>
                                        </div>

                                        <p className="token__percent">30%</p>
                                    </div>

                                    <div className="token__point">
                                        <div className="token__point--wrapper">
                                            <p className="token__num">3</p>

                                            <p className="token__name">Team</p>
                                        </div>

                                        <p className="token__percent">5%</p>
                                    </div>

                                    <div className="token__point">
                                        <div className="token__point--wrapper">
                                            <p className="token__num">6</p>

                                            <p className="token__name">Airdrop/Staking</p>
                                        </div>

                                        <p className="token__percent">15%</p>
                                    </div>

                                    <div className="token__point">
                                        <div className="token__point--wrapper">
                                            <p className="token__num">7</p>

                                            <p className="token__name">Cex listing/Dex</p>
                                        </div>

                                        <p className="token__percent">10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="roadmap" id="road" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="roadmap__inner">
                        <img src="/assets/img/foot.png" alt="foot" className="roadmap__foot" />

                        <h3 className="subtitle">Road map</h3>

                        <Swiper 
                            className="roadmap__slider"
                            spaceBetween={60}
                            modules={[Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20
                                },
                                998: {
                                    slidesPerView: 2,
                                    spaceBetween: 40
                                },
                                1200: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 60
                                }
                            }}
                        >
                            <SwiperSlide className="roadmap__item">
                                <div className="roadmap__item--circle"></div>

                                <p className="roadmap__item--title">Phase 1</p>

                                <div className="roadmap__item--content">
                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Release website, Whitepaper and Cokenomics
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Build founding team
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Establish initial community on Telegram and other social media platforms
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Influencer marketing drive
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            1000 Telegram Members
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Get #CrazyCock trending on twitter
                                        </p>
                                    </div>

                                    <img src="/assets/img/cock1.png" alt="cock" className="roadmap__item--cock" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="roadmap__item">
                                <div className="roadmap__item--circle"></div>

                                <p className="roadmap__item--title">Phase 2</p>

                                <div className="roadmap__item--content">
                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Community Building and Engagement
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Press Releases
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            5000 + Members
                                        </p>
                                    </div>

                                    <img src="/assets/img/cock2.png" alt="cock" className="roadmap__item--cock" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="roadmap__item">
                                <div className="roadmap__item--circle"></div>

                                <p className="roadmap__item--title">Phase 3</p>

                                <div className="roadmap__item--content">
                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            10k Members
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Website Redesign
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Presale
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Token distribution ,DEX listing(Uniswap)
                                        </p>
                                    </div>

                                    <img src="/assets/img/cock3.png" alt="cock" className="roadmap__item--cock" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="roadmap__item">
                                <div className="roadmap__item--circle"></div>

                                <p className="roadmap__item--title">Phase 4</p>

                                <div className="roadmap__item--content">
                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            10k Members
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Cock Merch
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            CoinGecko /Coinmarketcap Listing
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Initial CEX Listings (Hotbit, Bilaxy, CoinTiger)
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            T1 Exchange Listing LFG
                                        </p>
                                    </div>

                                    <div className="roadmap__item--point">
                                        <img src="/assets/img/cock-type.svg" alt="cock" className="roadmap__item--point--img" />

                                        <p className="roadmap__item--point--text">
                                            Airdrop distribution
                                        </p>
                                    </div>

                                    <img src="/assets/img/cock4.png" alt="cock" className="roadmap__item--cock" />
                                </div>
                            </SwiperSlide>

                            <SwiperNav />
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="social" id="social">
                <div className="container">
                    <div className="social__inner">
                        <div className="social__img--inner" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/assets/img/social-cock.png" alt="cock" className="social__img" />
                        </div>

                        <div className="social__content" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="subtitle">
                                Social
                            </h3>

                            <p className="social__text">
                                Establish initial community on Telegram and other social media platforms   Establish initial community on.
                            </p>

                            <div className="social__items">
                                <a href="https://t.me/+0g7J7mpxjChlN2I0" target="_blank" className="social__item">
                                    <svg className="social__item--icon" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 2.7294C33 2.82935 33 2.92931 33 3.02926L29.1467 26.8184C29.0479 27.4181 28.6527 28.0178 28.1587 28.3177C27.3683 28.8174 26.479 28.8174 25.6886 28.3177L15.018 20.9211C14.2275 20.4213 14.1287 19.2218 14.8204 18.6221L24.7006 9.02652C24.8982 8.82661 24.8982 8.52674 24.7994 8.32684C24.6018 8.02697 24.2066 7.92702 23.9102 8.12693L10.7695 16.9229C9.28743 17.9224 7.50898 18.1223 5.82934 17.6226L0.889223 16.0233C0.395211 15.8234 0 15.3236 0 14.8239C0 14.524 0.0988031 14.3241 0.197606 14.1242C0.296408 13.9243 0.494013 13.7244 0.79042 13.6244L30.4311 0.830271C31.2216 0.530408 32.1108 0.730317 32.6048 1.33004C32.8024 1.72986 33 2.22963 33 2.7294Z" fill="#FFBD1D"/>
                                    </svg>
                                </a>

                                <a href="https://twitter.com/crazycockmeme" target="_blank" className="social__item">
                                    <svg className="social__item--icon" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35 3.37794C33.6351 3.97405 32.2702 4.47081 30.9053 4.47081C32.3677 3.57665 33.4401 2.18573 34.0251 0.496757C32.3677 1.49027 30.8078 2.08637 29.4429 2.28507C28.1755 0.894151 26.3231 0 24.2758 0C20.2785 0 17.0613 3.27859 17.0613 7.352C17.0613 7.94811 17.1588 8.5442 17.2563 9.04096C10.7242 8.64355 5.8496 5.96108 2.24236 1.39091C0.584976 5.16627 0.974942 8.54421 4.58219 11.2267C3.41227 11.2267 2.24236 10.9287 1.26743 10.3325C1.36492 14.0085 3.21728 16.393 7.01951 17.5852C6.04458 17.8832 4.97214 17.9826 3.80222 17.7839C4.77715 20.7644 7.01952 22.4534 10.5293 22.7515C7.60448 25.1359 4.09471 26.2288 0 25.8314C12.8691 33.9782 31.2953 25.9307 31.2953 7.25264C31.2953 7.15329 31.2953 7.15328 31.2953 7.05393C32.7577 6.25912 33.9276 4.96757 35 3.37794Z" fill="#FFBD1D"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Marquee />
            
            <section className="faq" id="faq" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="faq__inner">
                        <h3 className="subtitle center">Faq</h3>

                        <div className="faq__content">
                            <FaqItem
                                number="01"
                                question="What is CrazyCock?"
                                answer="The CrazyCock Meme project is a digital creative endeavor aimed at developing and popularizing a humorous and entertaining internet meme centered around a fictional character named CrazyCock."
                            />
                            
                            <FaqItem
                                number="02"
                                question="What are the $COCK token Details"
                                answer="$COCK is an ERC-20 token on the Ethereum Blockchain with a maximum supply of 500,000,000,000,000 (500 trillion)."
                            />

                            <FaqItem
                                number="03"
                                question="Why CrazyCock?"
                                answer="The project's primary objective is to generate widespread engagement and laughter across various online platforms, including social media, forums, and image-sharing websites."
                            />

                            <FaqItem
                                number="04"
                                question="When is the $Cock Presale?"
                                answer="The specific date and time for the Presale as well as the launch details will be announced on our website and official social media platforms after The Airdrop Campaign concludes. *Cryptocurrency may be unregulated in your jurisdiction. *The value of cryptocurrencies may go down as well as up. *Profits may be subject to capital gains or other taxes applicable in your jurisdiction."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <p className="footer__disc">
                            $Cock is a meme coin with no intrinsic value or expectation of financial return. The Coin is for entertainment purposes only.
                        </p>

                        <div className="footer__wrapper">
                            <div className="footer__social">
                                <a href="https://twitter.com/crazycockmeme" target="_blank" className="footer__social--link">
                                    <img src="/assets/img/twitter.svg" alt="twitter" className="footer__social--icon" />
                                </a>
            
                                <a href="https://t.me/+0g7J7mpxjChlN2I0" className="footer__social--link">
                                    <img src="/assets/img/telegram.svg" alt="telegram" target="_blank" className="footer__social--icon" />
                                </a>
                            </div>
            
                            <p className="footer__copy">
                                Copyright. CrazyCock 2023.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;