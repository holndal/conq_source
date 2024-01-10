import './App.css';
import Result from './components/Result.js';
import Detail from './components/Detail.js';


function App() {
  return (
    <>
      <>
        <a href="https://docs.google.com/spreadsheets/d/1rG7CX5Q4HrbgUomC9VjO_IQytGZYtcAMKQT3aMvTxeQ/edit#gid=0">採取時間復活時間の登録にご協力をお願いします。</a>
        <br />
        ※使い方: D列の「残り時間記帳欄」に残り「HH:MM」を記帳するだけ
      </>
      <Detail />
      <Result />
    </>
  );
}

export default App;
