import HorizontalScroll from 'react-scroll-horizontal'
import logo from '../asset/architecture-and-city.png'
import WheelCard from './atom/WheelCard'
import Chart from './atom/Tab2_chart'
import { useState } from 'react'

// 나중에 parsing할 때 사용 ?
// const cards = [...new Array(10)].map((x, i) => ({
//     name: `card ${i}`,
//     img: "https://source.unsplash.com/random"
// }));

const cards = ['전체', '서울', '광역시', '충남', '충북', '경남'].map((x, i) => ({
    name: x,
    img: logo
}))

const Tab2_Map = () => {
    const [area, setArea] = useState('전체')
    return (
        <div>
            전국 확진 추이를 알아봅시다!
            <div id='scroll-horizontal' style={{ height: '200px' }}>
                <HorizontalScroll pageLock={true} reverseScroll={true}>
                    <WheelCard name="전체" setArea={setArea} ></WheelCard>
                    <WheelCard name="서울" setArea={setArea}></WheelCard>
                    <WheelCard name="광역시" setArea={setArea}></WheelCard>
                    <WheelCard name="충남" setArea={setArea}></WheelCard>
                    <WheelCard name="충북" setArea={setArea}></WheelCard>
                    <WheelCard name="경남" setArea={setArea}></WheelCard>
                    <WheelCard name="경북" setArea={setArea}></WheelCard>
                    <WheelCard name="전남" setArea={setArea}></WheelCard>
                    <WheelCard name="전북" setArea={setArea}></WheelCard>
                    <WheelCard name="강원" setArea={setArea}></WheelCard>
                </HorizontalScroll>
            </div>
            <Chart name={area}></Chart>
        </div>

    )
}
export default Tab2_Map