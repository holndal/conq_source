import { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
function Detail() {
    const [getTax, setTax] = useState(0)
    return (
        <details>
            <summary>採集いろいろ文書</summary>
            製造税<Form.Select onChange={(e) => { setTax(Number(e.target.value)) }}>
                <option value={0}>0%</option>
                <option value={100}>100%</option>
                <option value={500}>500%</option>
            </Form.Select>
            <Table border={1}><tr><td align='center'>銀貨</td><td align='center'>オスマン</td><td align='center'>砂利</td><td align='center'>将軍</td><td align='center'>弩</td><td align='center'>火矢</td><td align='center'>油壺</td><td align='center'>ナポ</td></tr>
                <tr><td align='center'>紫</td><td align='center'>{3000 + (getTax + 100) * 10}</td><td align='center'>{2500 + (getTax + 100) * 10}</td><td align='center'>{2500 + (getTax + 100) * 10}</td><td align='center'>{2500 + (getTax + 100) * 10}</td><td align='center'>{2250 + (getTax + 100) * 10}</td><td align='center'>{2250 + (getTax + 100) * 10}</td><td align='center'>{2500 + (getTax + 100) * 10}</td></tr>
                <tr><td align='center'>青</td><td align='center'>{1500 + (getTax + 100) * 5}</td><td align='center'>{1250 + (getTax + 100) * 5}</td><td align='center'>{1250 + (getTax + 100) * 5}</td><td align='center'>{1250 + (getTax + 100) * 5}</td><td align='center'>{1250 + (getTax + 100) * 5}</td><td align='center'>{1125 + (getTax + 100) * 5}</td><td align='center'>{1250 + (getTax + 100) * 5}</td></tr>
                <tr><td align='center'>緑</td><td align='center'></td><td align='center'>{700 + (getTax + 100) * 2.5}</td><td align='center'>{700 + (getTax + 100) * 2.5}</td><td align='center'>{800 + (getTax + 100) * 2.5}</td><td align='center'>{700 + (getTax + 100) * 2.5}</td><td align='center'>{600 + (getTax + 100) * 2.5}</td><td align='center'>{700 + (getTax + 100) * 2.5}</td></tr></Table>
            <br />
            青以上の器械を生産するには「基本資源」と「副産物」を組み合わせて「加工品」を作って、「加工品」を組み合わせて作るイメージ。<br />
            <br />
            紫器械の例(青はこの半分)。<br />
            例: 紫オスマンを作るためには錬鉄x200 赤銅x200 ニス塗木x100 細かい石材x100が必要
            <Table border={1}><tr><td align='center'></td><td align='center'>オスマン</td><td align='center'>砂利</td><td align='center'>将軍</td><td align='center'>弩</td><td align='center'>火矢</td><td align='center'>油壺</td><td align='center'>ナポ</td></tr><tr><td align='center'>中糸</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>100</td><td align='center'></td><td align='center'></td><td align='center'></td></tr><tr><td align='center'>錬鉄</td><td align='center'>200</td><td align='center'>200</td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td></tr><tr><td align='center'>赤銅</td><td align='center'>200</td><td align='center'>100</td><td align='center'>200</td><td align='center'></td><td align='center'>100</td><td align='center'>100</td><td align='center'>200</td></tr><tr><td align='center'>ニス皮</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td><td align='center'></td></tr><tr><td align='center'>ニス塗木</td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td><td align='center'>200</td><td align='center'>200</td><td align='center'>150</td><td align='center'>100</td></tr><tr><td align='center'>細かい石材</td><td align='center'>100</td><td align='center'>100</td><td align='center'>100</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>100</td></tr></Table>
            基本資源と副産物の組み合わせ
            (〇:基本資源 ×:副産物)
            <Table border={1}><tr><td align='center'></td><td align='center'></td><td align='center'>石</td><td align='center'>石</td><td align='center'>木</td><td align='center'>木</td><td align='center'>銅</td><td align='center'>銅</td><td align='center'>鉄</td><td align='center'>鉄</td><td align='center'>綿</td><td align='center'>綿</td><td align='center'>革</td><td align='center'>革</td></tr><tr><td align='center'></td><td align='center'></td><td align='center'>主</td><td align='center'>副</td><td align='center'>主</td><td align='center'>副</td><td align='center'>主</td><td align='center'>副</td><td align='center'>主</td><td align='center'>副</td><td align='center'>主</td><td align='center'>副</td><td align='center'>主</td><td align='center'>副</td></tr><tr><td align='center'>綿</td><td align='center'>中糸</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>O</td><td align='center'>X</td><td align='center'></td><td align='center'></td></tr><tr><td align='center'>銅</td><td align='center'>錬鉄</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>X</td><td align='center'>O</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td></tr><tr><td align='center'>鉄</td><td align='center'>赤銅</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>O</td><td align='center'></td><td align='center'></td><td align='center'>X</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td></tr><tr><td align='center'>木</td><td align='center'>ニス皮</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>X</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>O</td><td align='center'></td></tr><tr><td align='center'>革</td><td align='center'>ニス塗木</td><td align='center'></td><td align='center'></td><td align='center'>O</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'>X</td></tr><tr><td align='center'>木</td><td align='center'>細かい石材</td><td align='center'>O</td><td align='center'></td><td align='center'></td><td align='center'>X</td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td><td align='center'></td></tr></Table>
            <br />
            基本資源はR1-R4なんでもいいから気にしない。(R:資源ランク R1:白 R2:緑 R3:青 R4:紫)副産物を集める事が採集のメイン。<br />
            特に「オスマン」「砂利」「将軍大砲」「ナポ」の材料「銅」「鉄」「革」「木」の副産物を取りに行く事。<br />
            資源ランクが高い(=紫に近い)ほど摂れる副産物の量が多い。資源ポイントが更新されてR4資源がフルでも2分ぐらいで全部取られる。<br />
            <br />
            そこで更新時間をサイトでまとめておいて、更新時間前に資源ポイントで待っていっぱい取るって作戦<br />
            <br />
            <br />
            ※R4資源→R4資源に更新されるわけではなく、R1~R4がランダムに変わるので、待ってたのにR1資源とかだったりもする。しょげないでね<br />
            ※「U」→採取技術みたいなところで採取ノードを取れる。「副産物+100%」とかあるので積極的に取ろう。「銅」「鉄」「革」「木」の副産物を優先してとると〇<br />
            ※最初はR1-R4問わずとにかく採取してレベル上げると良い。特に自領土は3回,連盟は2回取れるので積極的に採取する<br />
            ※銀貨稼ぎならこの副産物売るだけでもかなり儲かる...(と思う)。誰か教えて詳しい人<br />
            ※百越民兵×5が採取能力高くて良い。可能ならLv7まで育てたり、採取軍魂を付けると良い<br />
            ※1週間に100回までしか採取できない。<br />
            ※税率0%-500%あるので高いと思ったら行かないこと<br />
        </details >
    )
}
export default Detail;
