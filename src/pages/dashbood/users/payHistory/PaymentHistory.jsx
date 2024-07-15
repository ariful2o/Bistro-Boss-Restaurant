import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useAuth from "../../../../hooks/auth/useAuth";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${user.email}`);
      return res.data;
    },
  });
  const totalPay = paymentHistory.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <SectionTitle
        title="Payment History"
        subtitle="All payment"
      ></SectionTitle>
      <h2 className="text-2xl my-6">
        Total Pay : <span className="font-bold text-green-500">$ {totalPay}</span> USD
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((item, index) => {
              return (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.time}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
