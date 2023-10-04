import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Result() {
    const [getCsv, setCsv] = useState();
    const [getTime, setTime] = useState(new Date());
    let list = []
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000*30)
    }, [])
    if (getCsv == null) {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSZGE5EGSpP2J-l-griubIFDR2rhrc8ZbJiWg4zIjMSEzxhx733UHwJRbCBzF4TeqJgq4IcV83YWbkk/pub?gid=1857516522&single=true&output=csv")
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
            let targetTime = new Date(line[7]);
            let leftTime = (targetTime - getTime) / 1000 / 60;
            if (leftTime < 0) {
                continue
            }
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
                        {Math.floor(leftTime / 60).toString().padStart(2, '0')}:{Math.floor(leftTime % 60).toString().padStart(2, '0')}
                    </th>
                    <th>
                        {targetTime.getHours().toString().padStart(2, '0')}:{targetTime.getMinutes().toString().padStart(2, '0')}
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
    return (
        <>
            <>
                <a href="https://docs.google.com/spreadsheets/d/1u3QZ8tyC2ix7sEJEkTQp8D02JGoeD7bJFAMuoXfkuok/edit?usp=sharing">採取時間復活時間の登録にご協力をお願いします。</a>
                <br />
                ※使い方: D列の「残り時間記帳欄」に残り「HH:MM」を記帳するだけ
            </>
            <details>
                <summary>エリア画像</summary>
                <img src={`${process.env.PUBLIC_URL}/conq/オグリア.png`} loading='lazy' />
                <img src={`${process.env.PUBLIC_URL}/conq/クレメンス.png`} loading='lazy' />
                <img src={`${process.env.PUBLIC_URL}/conq/混迷.png`} loading='lazy' />
            </details>
            <Table>
                {list}
            </Table>
        </>
    );
}

export default Result;
