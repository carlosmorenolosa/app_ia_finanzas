import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Home, Coins, PiggyBank } from "lucide-react";

// -------------------------------------------------
// Herramientas
// -------------------------------------------------

// Herramienta: Calculadora de Interés Compuesto
function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [annualRate, setAnnualRate] = useState(0);
  const [years, setYears] = useState(0);
  const [timesCompounded, setTimesCompounded] = useState(12);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [result, setResult] = useState(0);

  // Cálculo de interés compuesto con aportaciones periódicas.
  // Fórmula:
  // Valor futuro = P * (1 + r/n)^(n*t)
  //              + M * [((1 + r/n)^(n*t) - 1) / (r/n)],
  // donde:
  // P = principal inicial
  // r = tasa de interés anual (decimal)
  // n = número de capitalizaciones por año
  // t = años
  // M = aportación periódica (por ejemplo, mensual si n=12)

  const calculateInterest = () => {
    const principalVal = parseFloat(principal);
    const rateVal = parseFloat(annualRate) / 100;
    const yearsVal = parseFloat(years);
    const nVal = parseFloat(timesCompounded);
    const contribVal = parseFloat(monthlyContribution);

    if (!isNaN(principalVal) && !isNaN(rateVal) && !isNaN(yearsVal) && !isNaN(nVal)) {
      // Cálculo del factor de capitalización
      const base = Math.pow(1 + rateVal / nVal, nVal * yearsVal);

      // Parte 1: Crecimiento del principal inicial
      let total = principalVal * base;

      // Parte 2: Suma de las aportaciones periódicas (si existen)
      if (!isNaN(contribVal) && contribVal > 0) {
        // Aportación por periodo se asume igual a monthlyContribution
        // si n=12 => aportación mensual
        const deposits = contribVal * ((base - 1) / (rateVal / nVal));
        total += deposits;
      }

      setResult(total);
    }
  };

  return (
    <Card className="p-4 shadow-md mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" /> Calculadora de Interés Compuesto
        </CardTitle>
        <CardDescription>Descubre el crecimiento de tu inversión</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Principal (P)</label>
            <Input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Ej: 10000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Tasa de interés anual (%)</label>
            <Input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="Ej: 5"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Años (t)</label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Ej: 10"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Veces que se capitaliza al año (n)</label>
            <Input
              type="number"
              value={timesCompounded}
              onChange={(e) => setTimesCompounded(e.target.value)}
              placeholder="Ej: 12 (mensual)"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Aportación Mensual</label>
            <Input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              placeholder="Ej: 200"
            />
          </div>
        </div>
        <Button onClick={calculateInterest}>Calcular</Button>
        {result > 0 && (
          <p className="mt-4 text-lg font-semibold">
            Monto final con aportaciones: <span className="text-green-600">${result.toFixed(2)}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
// Herramienta: Calculadora de Hipoteca
function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [annualRate, setAnnualRate] = useState(0);
  const [years, setYears] = useState(30);
  const [result, setResult] = useState(0);

  const calculateMortgage = () => {
    const principalVal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(annualRate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    if (monthlyRate === 0) {
      const payment = principalVal / numberOfPayments;
      setResult(payment);
    } else {
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
      const monthlyPayment = principalVal * (numerator / denominator);
      setResult(monthlyPayment);
    }
  };

  return (
    <Card className="p-4 shadow-md mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="w-5 h-5" /> Calculadora de Hipoteca
        </CardTitle>
        <CardDescription>Estima tu pago mensual</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Precio de la vivienda</label>
            <Input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              placeholder="Ej: 150000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Pago inicial (Down Payment)</label>
            <Input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="Ej: 30000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Tasa de interés anual (%)</label>
            <Input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="Ej: 4"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Años de hipoteca</label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Ej: 30"
            />
          </div>
        </div>
        <Button onClick={calculateMortgage}>Calcular</Button>
        {result > 0 && (
          <p className="mt-4 text-lg font-semibold">
            Pago mensual estimado: <span className="text-green-600">${result.toFixed(2)}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Herramienta: Conversor de Moneda
function CurrencyConverter() {
  // En un caso real, se haría una llamada a una API externa para obtener los tipos de cambio.
  // Aquí usamos tasas ficticias.
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const mockRates = {
    USD: 1,
    EUR: 0.92,
    MXN: 18.9,
  };

  const handleConvert = () => {
    const fromRate = mockRates[fromCurrency];
    const toRate = mockRates[toCurrency];
    if (fromRate && toRate && amount > 0) {
      const valueInUSD = parseFloat(amount) / fromRate;
      const finalValue = valueInUSD * toRate;
      setConvertedAmount(finalValue);
    }
  };

  return (
    <Card className="p-4 shadow-md mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="w-5 h-5" /> Conversor de Moneda
        </CardTitle>
        <CardDescription>Convierte entre USD, EUR y MXN</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Cantidad</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ej: 100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Moneda origen</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              {Object.keys(mockRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Moneda destino</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              {Object.keys(mockRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button onClick={handleConvert}>Convertir</Button>
        {convertedAmount > 0 && (
          <p className="mt-4 text-lg font-semibold">
            Resultado: <span className="text-green-600">{convertedAmount.toFixed(2)} {toCurrency}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Herramienta: Planificador de Presupuesto
function BudgetPlanner() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([{ name: "Alquiler", amount: 0 }]);
  const [balance, setBalance] = useState(0);

  const handleCalculate = () => {
    const totalExpenses = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
    setBalance(parseFloat(income) - totalExpenses);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { name: "", amount: 0 }]);
  };

  const handleExpenseChange = (index, field, value) => {
    const updated = [...expenses];
    updated[index][field] = value;
    setExpenses(updated);
  };

  return (
    <Card className="p-4 shadow-md mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PiggyBank className="w-5 h-5" /> Planificador de Presupuesto
        </CardTitle>
        <CardDescription>Controla tus ingresos y gastos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Ingresos Mensuales</label>
            <Input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Ej: 2000"
            />
          </div>
          <hr className="my-2" />
          <label className="text-md font-semibold">Gastos</label>
          {expenses.map((expense, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                type="text"
                value={expense.name}
                onChange={(e) => handleExpenseChange(index, "name", e.target.value)}
                placeholder="Ej: Alquiler"
                className="w-1/2"
              />
              <Input
                type="number"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(index, "amount", e.target.value)}
                placeholder="Monto"
                className="w-1/2"
              />
            </div>
          ))}
          <Button variant="outline" onClick={handleAddExpense}>
            Agregar Gasto
          </Button>
        </div>
        <Button onClick={handleCalculate}>Calcular Balance</Button>
        <p className="mt-4 text-lg font-semibold">
          Balance restante: <span className={balance >= 0 ? "text-green-600" : "text-red-600"}>${balance.toFixed(2)}</span>
        </p>
      </CardContent>
    </Card>
  );
}

// -------------------------------------------------
// Sección: Estrategia de Inversión
// -------------------------------------------------
function InvestmentStrategy() {
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [investmentCapital, setInvestmentCapital] = useState(0);
  const [riskProfile, setRiskProfile] = useState("conservador");
  const [investmentPreference, setInvestmentPreference] = useState("renta fija");
  const [investmentHorizon, setInvestmentHorizon] = useState("largo");
  const [investmentGoal, setInvestmentGoal] = useState("ahorros");

  // Aquí es donde se pueden recopilar estos datos para enviarlos a un LLM.
  const handleGenerateStrategy = () => {
    const strategyData = {
      monthlySalary,
      investmentCapital,
      riskProfile,
      investmentPreference,
      investmentHorizon,
      investmentGoal,
    };
    console.log("Datos de estrategia:", strategyData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-4"
    >
      <h2 className="text-3xl font-semibold mb-4">Definir Estrategia de Inversión</h2>
      <Card className="p-4 shadow-md">
        <CardHeader>
          <CardTitle>Estrategia Personalizada</CardTitle>
          <CardDescription>Completa estos datos para elaborar tu estrategia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Sueldo Mensual</label>
              <Input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                placeholder="Ej: 2000"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Patrimonio Destinado a Invertir</label>
              <Input
                type="number"
                value={investmentCapital}
                onChange={(e) => setInvestmentCapital(e.target.value)}
                placeholder="Ej: 10000"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Perfil de Riesgo</label>
              <select
                value={riskProfile}
                onChange={(e) => setRiskProfile(e.target.value)}
                className="border border-gray-300 rounded p-2"
              >
                <option value="conservador">Conservador</option>
                <option value="moderado">Moderado</option>
                <option value="agresivo">Agresivo</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Tipo de Inversión Preferida</label>
              <select
                value={investmentPreference}
                onChange={(e) => setInvestmentPreference(e.target.value)}
                className="border border-gray-300 rounded p-2"
              >
                <option value="renta fija">Renta Fija</option>
                <option value="renta variable">Renta Variable</option>
                <option value="depositos">Depósitos</option>
                <option value="oro">Oro</option>
                <option value="criptomonedas">Criptomonedas</option>
                <option value="mixto">Mixto / Varios</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Horizonte de Inversión</label>
              <select
                value={investmentHorizon}
                onChange={(e) => setInvestmentHorizon(e.target.value)}
                className="border border-gray-300 rounded p-2"
              >
                <option value="corto">Corto Plazo (1-3 años)</option>
                <option value="medio">Medio Plazo (3-7 años)</option>
                <option value="largo">Largo Plazo (7+ años)</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Objetivo de Inversión</label>
              <select
                value={investmentGoal}
                onChange={(e) => setInvestmentGoal(e.target.value)}
                className="border border-gray-300 rounded p-2"
              >
                <option value="ahorros">Ahorros</option>
                <option value="jubilar">Jubilación</option>
                <option value="educacion">Educación</option>
                <option value="compras grandes">Compras Grandes</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          <Button onClick={handleGenerateStrategy}>Generar Estrategia</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// -------------------------------------------------
// Sección: Inicio
// -------------------------------------------------
function HomeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto mt-6 p-4 text-center"
      style={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)" }}
    >
      <div className="mb-6">
        <h2 className="text-5xl font-extrabold mb-2 text-green-700">Invierte Sin Miedo</h2>
        <p className="text-gray-700 text-xl max-w-4xl mx-auto">
          La plataforma moderna y segura para impulsar tus finanzas personales.
          Descubre herramientas, recursos y guías prácticas para invertir de manera inteligente
          y con confianza.
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mt-6"
      >
        <h3 className="text-2xl font-bold mb-3 text-green-600">¿Por qué Invierte Sin Miedo?</h3>
        <p className="text-gray-600 text-base">
          Nuestra misión es ayudarte a crecer financieramente con un enfoque práctico y accesible.
          Conoce las herramientas que hemos diseñado para simplificar tu camino hacia la libertad financiera.
        </p>
        <Button className="mt-4" variant="outline">
          Empieza a Explorar
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Análisis de Mercado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Accede a insights y reseñas de mercados bursátiles, cripto y más.
                Mantente informado y toma decisiones con fundamento.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Herramientas Inteligentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Desde calculadoras de interés compuesto hasta planeadores de inversión.
                Todo lo que necesitas para manejar tu dinero con soltura.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Educación Financiera</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Sumérgete en nuestro blog y guías para perfeccionar tus conocimientos en ahorro, inversión
                y planificación a largo plazo.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

// -------------------------------------------------
// Sección: Blog
// -------------------------------------------------
function Blog() {
  const articles = [
    {
      title: "Cómo Invertir en la Bolsa sin Miedo",
      description: "Una introducción básica para quienes inician en el mundo bursátil.",
      date: "Enero 24, 2025",
    },
    {
      title: "Fondos Indexados: El Futuro de la Inversión",
      description: "Descubre por qué los fondos indexados son la base de las carteras exitosas.",
      date: "Enero 17, 2025",
    },
    {
      title: "Criptomonedas y Regulación: ¿Qué Debemos Saber?",
      description: "Un vistazo a los retos y oportunidades del mercado cripto.",
      date: "Enero 10, 2025",
    },
  ];

  return (
    <section className="container mx-auto mb-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">{article.description}</p>
              <Button variant="outline">Leer más</Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}

// -------------------------------------------------
// App principal
// -------------------------------------------------
export default function InvierteSinMiedoApp() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [activeTool, setActiveTool] = useState("compound");

  const renderTools = () => {
    return (
      <>
        <div className="flex gap-4 mb-6 border-b border-gray-300 pb-2">
          <button
            onClick={() => setActiveTool("compound")}
            className={activeTool === "compound" ? "text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"}
          >
            Interés Compuesto
          </button>
          <button
            onClick={() => setActiveTool("mortgage")}
            className={activeTool === "mortgage" ? "text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"}
          >
            Hipoteca
          </button>
          <button
            onClick={() => setActiveTool("converter")}
            className={activeTool === "converter" ? "text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"}
          >
            Conversor de Moneda
          </button>
          <button
            onClick={() => setActiveTool("budget")}
            className={activeTool === "budget" ? "text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"}
          >
            Presupuesto
          </button>
        </div>

        {activeTool === "compound" && <CompoundInterestCalculator />}
        {activeTool === "mortgage" && <MortgageCalculator />}
        {activeTool === "converter" && <CurrencyConverter />}
        {activeTool === "budget" && <BudgetPlanner />}
      </>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 font-sans">
      {/* Encabezado */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.h1
            className="text-2xl font-bold text-green-700"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Invierte Sin Miedo
          </motion.h1>
          <nav className="flex gap-4">
            <button
              onClick={() => setActiveSection("inicio")}
              className={
                activeSection === "inicio"
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-700 transition-colors"
              }
            >
              Inicio
            </button>
            <button
              onClick={() => setActiveSection("tools")}
              className={
                activeSection === "tools"
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-700 transition-colors"
              }
            >
              Herramientas
            </button>
            <button
              onClick={() => setActiveSection("strategy")}
              className={
                activeSection === "strategy"
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-700 transition-colors"
              }
            >
              Estrategia
            </button>
            <button
              onClick={() => setActiveSection("blog")}
              className={
                activeSection === "blog"
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-700 transition-colors"
              }
            >
              Blog
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className={
                activeSection === "about"
                  ? "text-green-700 font-semibold"
                  : "text-gray-600 hover:text-green-700 transition-colors"
              }
            >
              Acerca
            </button>
          </nav>
        </div>
      </header>

      {/* Sección dinámica */}
      <main className="container mx-auto p-4">
        {activeSection === "inicio" && <HomeSection />}
        {activeSection === "tools" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <h2 className="text-3xl font-semibold mb-4">Herramientas Financieras</h2>
            {renderTools()}
          </motion.div>
        )}
        {activeSection === "strategy" && <InvestmentStrategy />}
        {activeSection === "blog" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <h2 className="text-3xl font-semibold mb-4">Últimos Artículos</h2>
            <Blog />
          </motion.div>
        )}
        {activeSection === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <h2 className="text-3xl font-semibold mb-4">Acerca de Invierte Sin Miedo</h2>
            <p className="text-gray-600 text-lg mb-2 max-w-2xl">
              Invierte Sin Miedo es tu plataforma en español para emprender un viaje financiero seguro y confiable.
              Desde calculadoras de interés compuesto hasta planificadores de presupuesto, te ofrecemos
              herramientas para impulsar tus ahorros, incrementar tu patrimonio y construir el futuro que deseas.
            </p>
            <p className="text-gray-600 text-lg max-w-2xl">
              Nuestro objetivo es que inviertas con confianza y tomes decisiones informadas. Porque cuando gestionas
              bien tu dinero, ¡ya no hay nada que temer!
            </p>
          </motion.div>
        )}
      </main>

      {/* Pie de página */}
      <footer className="bg-green-900 text-gray-100 py-6 mt-10 text-center">
        <div className="container mx-auto">
          <p className="mb-2">© 2025 Invierte Sin Miedo. Todos los derechos reservados.</p>
          <a href="#" className="text-white hover:underline">Términos y Condiciones</a>
        </div>
      </footer>
    </div>
  );
}