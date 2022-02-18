import Head from 'next/head'
import Image from 'next/image'
import leftstyles from './left.module.scss'
import Transaction from "./Transactions/transactions";

export default function Left() {
    return (
        <div className={leftstyles.container}>


            <div className={leftstyles.balanceSection}>

                <div className={leftstyles.balanceLeft}>

                    <span className={leftstyles.accountId}>Account ID 98546</span>


                    <div className={leftstyles.money}>


                    <Image className={leftstyles.naira} width={32} height={66} src="data:image/svg+xml,%3Csvg width='31' height='40' viewBox='0 0 31 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.84 40V25.865H0.55V22.345H4.84V17.835H0.55V14.315H4.84V0.729997H10.56L15.785 14.315H22.275V0.729997H26.62V14.315H30.91V17.835H26.62V22.345H30.91V25.865H26.62V40H20.845L15.62 25.865H9.13V40H4.84ZM9.13 22.345H14.3L12.65 17.835H9.02L9.13 22.345ZM22.275 32.245H22.495L22.33 25.865H20.02L22.275 32.245ZM9.02 14.315H11.33L9.02 7.495H8.8L9.02 14.315ZM18.7 22.345H22.385L22.275 17.835H17.05L18.7 22.345Z' fill='%23040406'/%3E%3C/svg%3E%0A"/>

                    <span className={leftstyles.balance}> 743,956.00</span>
                    </div>
                    <div className={leftstyles.chart}>
                        <Image width={10} height={10}  src="data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.56699 0.75C3.75944 0.416667 4.24056 0.416667 4.43301 0.75L7.89711 6.75C8.08957 7.08333 7.849 7.5 7.4641 7.5H0.535898C0.150998 7.5 -0.0895646 7.08333 0.102885 6.75L3.56699 0.75Z' fill='%231DB954'/%3E%3C/svg%3E%0A" />

                   <h3 className={leftstyles.h3}> <span className={leftstyles.number}>27.56% </span> vs last month</h3>
                    </div>

                </div>

                <div className={leftstyles.balanceRight}>

                    <button className={leftstyles.button}>
                        <Image width={15} height={15}  src="data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.0002 9.18182V1H7.81836' stroke='%23040406' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M9.18182 16.0001V7.81824H1' stroke='%23040406' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A"/>
                    </button>
                    <button className={leftstyles.button}>
                        <Image width={22} height={18}  src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4V10H7' stroke='%23040406' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M23 20V14H17' stroke='%23040406' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M20.5 9.00004C19.6855 6.75974 18.0244 4.92848 15.8739 3.89998C13.7235 2.87149 11.2553 2.72788 9 3.50004C7.7459 3.98244 6.59283 4.69463 5.6 5.60004L1 10M23 14L18.4 18.4C16.6963 20.0855 14.3965 21.0309 12 21.0309C9.60347 21.0309 7.30368 20.0855 5.6 18.4C4.69459 17.4072 3.9824 16.2541 3.5 15' stroke='%23040406' stroke-width='1.5'/%3E%3C/svg%3E%0A"/>
                    </button>

                    <button className={leftstyles.add}>
                        <Image width={26} height={26}  src="data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 13H19.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13 19.5V6.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"/>
                    </button>

                </div>

            </div>



            <div className={leftstyles.transactions}>

                <span className={leftstyles.transactionsHeader}>Transactions</span>



                <Transaction/>

            </div>



        </div>
    )
}
