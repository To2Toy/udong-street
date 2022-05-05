import { useState } from "react"
import { Nav } from "react-bootstrap"
import Tab1 from './Tab1_Rule';
import Tab2 from './Tab2_Map'

function TabContent(props) {
    if (props.tab === 0) {
        return <Tab1></Tab1>
    }
    else if (props.tab === 1) {
        return <Tab2></Tab2>
    }
}

const Content = () => {
    let [tab, setTab] = useState(0)
    return (
        <div id="menu-bar">
            <Nav fill variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }}>
                        우리 동네 규칙
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { setTab(1) }}>
                        전국 확진 추이
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div>
    )
}


export default Content