import { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
function Result() {
    const [getCsv, setCsv] = useState();
    const [getTime, setTime] = useState(new Date());
    const [getParam, setParam] = useState([true, true, true, true, true, true, true, true])
    // 0	綿
    // 1	木
    // 2	革
    // 3	銅
    // 4	馬
    // 5	麦
    // 6	石
    // 7	鉄
    let list = []
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    if (getCsv == null) {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTZqDNHmeuwzG63gWtrlec_57LSzzzNBB9NH-0IK_biJGJbRfBhLUHYAyCMAGC_FBrbY9DHIUL6UoFZ/pub?gid=1857516522&single=true&output=csv")
            .then(response => response.text())
            .then(data => {
                setCsv(data.split("\n"))
            })
    } else {
        list.push(
            <thead>
                <tr>
                    <th>
                        エリア
                    </th>
                    <th>
                        都市名
                    </th>
                    <th>
                        資源
                    </th>
                    <th>
                        あと何分
                    </th>
                    <th>
                        復活日時目安
                    </th>
                </tr>
            </thead>
        )
        let listt = []
        for (let i = 1; i < getCsv.length; i++) {
            let line = getCsv[i].split(",")
            if (line[0].length > 10) {
                continue
            }
            // 0	綿
            // 1	木
            // 2	革
            // 3	銅
            // 4	馬
            // 5	麦
            // 6	石
            // 7	鉄
            let flag = false
            switch (line[2]) {
                case "綿":
                    if (!getParam[0]) {
                        flag = true
                    }
                    break;
                case "木":
                    if (!getParam[1]) {
                        flag = true
                    }
                    break;
                case "革":
                    if (!getParam[2]) {
                        flag = true
                    }
                    break;
                case "銅":
                    if (!getParam[3]) {
                        flag = true
                    }
                    break;
                case "馬":
                    if (!getParam[4]) {
                        flag = true
                    }
                    break;
                case "麦":
                    if (!getParam[5]) {
                        flag = true
                    }
                    break;
                case "石":
                    if (!getParam[6]) {
                        flag = true
                    }
                    break;
                case "鉄":
                    if (!getParam[7]) {
                        flag = true
                    }
                    break;
                default:
                    flag = true
                    break
            }
            if (flag) {
                continue
            }
            let targetTime = new Date(line[7]);
            let leftTime = (targetTime - getTime) / 1000 / 60;
            let flaggy = true
            if (leftTime < 0) {
                let now = new Date()
                if (now.getDay() === 2 || now.getDay() === 6) {
                    if (21 <= now.getHours() && now.getHours() < 23) {
                        flaggy = false
                    }
                }
                if (flaggy) {
                    continue
                }

            }
            let timetext = Math.floor(leftTime / 60).toString().padStart(2, '0') + ":" + Math.floor(leftTime % 60).toString().padStart(2, '0')
            if (leftTime < 0) {
                timetext = "領土戦 保留中(21時-23時の間はリストから消去されません)"
            }
            let targetText = targetTime.getHours().toString().padStart(2, '0') + ":" + targetTime.getMinutes().toString().padStart(2, '0')
            let targetTimer = targetTime.getHours() * 60 + targetTime.getMinutes() - 1
            let targetUrl = Math.floor(targetTimer / 60).toString().padStart(2, "0") + ":" + Math.floor(targetTimer % 60).toString().padStart(2, "0")

            listt.push(
                <tr>
                    <th>
                        {line[0]}
                    </th>
                    <th>
                        {line[1]}
                    </th>
                    <th>
                        {line[2]}
                    </th>
                    <th>
                        {timetext}
                    </th>
                    <th>
                        <a href={"https://onlinealarmkur.com/ja/#" + targetUrl} target="_blank">
                            {targetText}
                        </a>
                    </th>
                </tr>
            )
        }
        list.push(
            <tbody>
                {listt}
            </tbody>
        )
    }
    function changer(i, bool) {
        let previous_value = getParam;
        if (bool) {
            previous_value[i] = true
        } else {
            previous_value[i] = false
        }
        setParam(previous_value)
    }
    return (
        <>
            <details>
                <summary>検索条件</summary>
                <Form.Check label="綿" defaultChecked={getParam[0]} onChange={
                    (e) => {
                        changer(0, e.target.checked)
                    }
                } />
                <Form.Check label="木" defaultChecked={getParam[1]} onChange={
                    (e) => {
                        changer(1, e.target.checked)
                    }
                } />
                <Form.Check label="革" defaultChecked={getParam[2]} onChange={
                    (e) => {
                        changer(2, e.target.checked)
                    }
                } />
                <Form.Check label="銅" defaultChecked={getParam[3]} onChange={
                    (e) => {
                        changer(3, e.target.checked)
                    }
                } />
                <Form.Check label="馬" defaultChecked={getParam[4]} onChange={
                    (e) => {
                        changer(4, e.target.checked)
                    }
                } />
                <Form.Check label="麦" defaultChecked={getParam[5]} onChange={
                    (e) => {
                        changer(5, e.target.checked)
                    }
                } />
                <Form.Check label="石" defaultChecked={getParam[6]} onChange={
                    (e) => {
                        changer(6, e.target.checked)
                    }
                } />
                <Form.Check label="鉄" defaultChecked={getParam[7]} onChange={
                    (e) => {
                        changer(7, e.target.checked)
                    }
                } />
            </details>
            <details>
                <summary>オグリア</summary>
                <img src={`${process.env.PUBLIC_URL}/オグリア.png`} loading='lazy' alt='オグリアの画像' />
            </details>
            <details>
                <summary>クレメンス</summary>
                <img src={`${process.env.PUBLIC_URL}/クレメンス.png`} loading='lazy' alt='クレメンスの画像' />
            </details>
            <details>
                <summary>混迷</summary>
                <img src={`${process.env.PUBLIC_URL}/混迷.png`} loading='lazy' alt='混迷の地の画像' />
            </details>
            <details>
                <summary>安涼府</summary>
                <img src={`${process.env.PUBLIC_URL}/安涼府.png`} loading='lazy' alt='安涼府の画像' />
            </details>
            <details>
                <summary>コンチェノープル</summary>
                <img src={`${process.env.PUBLIC_URL}/コンチェ.png`} loading='lazy' alt='コンチェノープルの画像' />
            </details>
            <>現在の日時{getTime.getHours().toString().padStart(2, '0')}:{getTime.getMinutes().toString().padStart(2, '0')}:{getTime.getSeconds().toString().padStart(2, '0')}</>
            <Table border="1" className="bg-dark">
                {list}
            </Table>
        </>
    );
}

export default Result;
