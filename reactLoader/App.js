import { useEffect, useState } from "react";
import "./App.css";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001"
      );
      const getRes = await res.json();
      setData(getRes);
      setLoading(false);
      toast.success("seccessfully fetched data.");
      // toast.warning("seccessfully fetched data.");
      //toast.error("seccessfully fetched data.");
    }
    getData();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="main">
        {loading ? (
          <TailSpin width={200} height={250} />
        ) : (
          data.map((e, i) => {
            return <p>{e.email}</p>;
          })
        )}
      </div>
    </>
  );
}

export default App;
