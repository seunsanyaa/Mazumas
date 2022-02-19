import Head from 'next/head'
import Image from 'next/image'
import rightstyles from './right.module.scss'
import leftstyles from "../Left/left.module.scss";

export default function Right() {
    return (
        <div className={rightstyles.container}>

            <div className={rightstyles.card}>


                <span className={rightstyles.cardName}>
                    Mazuma Card
                </span>

                <img className={rightstyles.cardImage} width='340px' height='205px' src="https://res.cloudinary.com/seunsanyaa/image/upload/v1645175007/Father_1_1_1_pnttya.png"/>

            </div>


            <div className={rightstyles.analyticsDiv}>

                <div className={rightstyles.analyticsHeader}>



                <span className={rightstyles.analytics}>Analytics</span>
                <span className={rightstyles.seeall}>See all</span>

                </div>

                <div className={rightstyles.chartsDiv}>

                    <div className={rightstyles.Chart}>

                        <span className={rightstyles.chartHead}>Spent this week</span>
<div className={rightstyles.priceDiv}>

    <Image className={leftstyles.naira} width={10} height={20} src="data:image/svg+xml,%3Csvg width='31' height='40' viewBox='0 0 31 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.84 40V25.865H0.55V22.345H4.84V17.835H0.55V14.315H4.84V0.729997H10.56L15.785 14.315H22.275V0.729997H26.62V14.315H30.91V17.835H26.62V22.345H30.91V25.865H26.62V40H20.845L15.62 25.865H9.13V40H4.84ZM9.13 22.345H14.3L12.65 17.835H9.02L9.13 22.345ZM22.275 32.245H22.495L22.33 25.865H20.02L22.275 32.245ZM9.02 14.315H11.33L9.02 7.495H8.8L9.02 14.315ZM18.7 22.345H22.385L22.275 17.835H17.05L18.7 22.345Z' fill='%23040406'/%3E%3C/svg%3E%0A"/>

                        <span className={rightstyles.chartPrice}>142,500.00</span>
</div>


                        <Image width={120} height={65} src="data:image/svg+xml,%3Csvg width='120' height='65' viewBox='0 0 120 65' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='112' width='8' height='65' rx='2' fill='%23F0F1F4'/%3E%3Crect width='8' height='65' rx='2' fill='%23F0F1F4'/%3E%3Crect y='40.8572' width='8' height='24.1429' rx='2' fill='%230066F5'/%3E%3Crect x='28' width='8' height='65' rx='2' fill='%23F0F1F4'/%3E%3Crect x='28' y='26.9286' width='8' height='38.0714' rx='2' fill='%230066F5'/%3E%3Crect x='56' width='8' height='65' rx='2' fill='%23F0F1F4'/%3E%3Crect x='56' y='39' width='8' height='26' rx='2' fill='%230066F5'/%3E%3Crect x='84' width='8' height='65' rx='2' fill='%23F0F1F4'/%3E%3Crect x='84' y='15.7858' width='8' height='49.2143' rx='2' fill='%230066F5'/%3E%3C/svg%3E%0A"/>



                    </div>
                    <div className={rightstyles.Chart2}>

                        <span className={rightstyles.chartHead}>Income this month</span>
                        <div className={rightstyles.priceDiv}>

                            <Image className={leftstyles.naira} width={10} height={20} src="data:image/svg+xml,%3Csvg width='31' height='40' viewBox='0 0 31 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.84 40V25.865H0.55V22.345H4.84V17.835H0.55V14.315H4.84V0.729997H10.56L15.785 14.315H22.275V0.729997H26.62V14.315H30.91V17.835H26.62V22.345H30.91V25.865H26.62V40H20.845L15.62 25.865H9.13V40H4.84ZM9.13 22.345H14.3L12.65 17.835H9.02L9.13 22.345ZM22.275 32.245H22.495L22.33 25.865H20.02L22.275 32.245ZM9.02 14.315H11.33L9.02 7.495H8.8L9.02 14.315ZM18.7 22.345H22.385L22.275 17.835H17.05L18.7 22.345Z' fill='%23040406'/%3E%3C/svg%3E%0A"/>

                            <span className={rightstyles.chartPrice}>435,168.93</span>
                        </div>


                        <Image width={120} height={65} src="data:image/svg+xml,%3Csvg width='121' height='72' viewBox='0 0 121 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 32.4424L33 22.4424L54.5 25.4424L65.5 9.94238L67 8.44238L87 0.942383H121V70.9424H1L9.5 32.4424Z' fill='url(%23paint0_linear_25_102)'/%3E%3Cpath d='M121 0.942383H87L66.5 8.44238L54.5 25.4424L33 22.4424L9 32.7154L1 70.9424' stroke='%230066F5' stroke-width='1.5'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_25_102' x1='61' y1='6.94238' x2='60' y2='69.9424' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230066F5' stop-opacity='0.18'/%3E%3Cstop offset='1' stop-color='%230066F5' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"/>



                    </div>

                </div>



            </div>
        </div>
    )
}
