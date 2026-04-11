import Link from "next/link";

export default function LogoButton(){
    return (
        <Link href={'/'}>
            <div className='header__left'>
                    <div className='header__logo'>
                        <div className="header__text">
                        <span className="header__logo-bold">
                            <span className="letter letter-0">C</span>
                            <span className="letter letter-1">S</span>
                            <span className="letter letter-2">S</span>
                        </span>
                        </div>
                        <svg className="header__logo-svg" width="18" height="20" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M14.25 6.03571C16.25 7.19041 16.25 10.0772 14.25 11.2319L4.5 16.861C2.5 18.0157 1.01395e-06 16.5724 1.1149e-06 14.263L1.60701e-06 3.00463C1.70796e-06 0.695224 2.5 -0.748153 4.5 0.406548L14.25 6.03571Z"/>
                        </svg>
                    </div>
            </div>
        </Link>
    )
}