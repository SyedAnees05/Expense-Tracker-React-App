import React, { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (newExpense.trim() !== "" && !isNaN(amount) && parseFloat(amount) > 0) {
      const newExpenseItem = {
        id: new Date().getTime(),
        description: newExpense,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpenseItem]);
      setNewExpense("");
      setAmount("");
    }
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input
        type="text"
        placeholder="Expense Description"
        value={newExpense}
        onChange={(e) => setNewExpense(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={addExpense}>Generate Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;

// import React, { useState } from "react";

// function ExpenseTracker() {
//   const [expenses, setExpenses] = useState([]);
//   const [newExpense, setNewExpense] = useState("");
//   const [amount, setAmount] = useState("");

//   const addExpense = () => {
//     if (newExpense.trim() !== "" && !isNaN(amount) && parseFloat(amount) > 0) {
//       const newExpenseItem = {
//         id: new Date().getTime(),
//         description: newExpense,
//         amount: parseFloat(amount),
//       };

//       setExpenses([...expenses, newExpenseItem]);
//       setNewExpense("");
//       setAmount("");
//     }
//   };

//   const deleteExpense = (id) => {
//     const updatedExpenses = expenses.filter((expense) => expense.id !== id);
//     setExpenses(updatedExpenses);
//   };

//   return (
//     <div>
//       <h2>Expense Tracker</h2>
//       <input
//         type="text"
//         placeholder="Expense Description"
//         value={newExpense}
//         onChange={(e) => setNewExpense(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <br />
//       <button onClick={addExpense}>Generate Expense</button>

//       <ul>
//         {expenses.map((expense) => (
//           <li key={expense.id}>
//             {expense.description} - ${expense.amount}
//             <button onClick={() => deleteExpense(expense.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ExpenseTracker;
