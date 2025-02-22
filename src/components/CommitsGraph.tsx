import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import Title from "./ui/Title";
import { Commit } from "@/interfaces/commits";

interface CommitsGraphProps {
  commits: Commit[];
}

export default function CommitsGraph(props: CommitsGraphProps) {
  const { commits } = props;

  const [chartData, setChartData] = useState<
    Array<{ date: string; count: number }>
  >([]);

  useEffect(() => {
    function calculateChartData() {
      const groupedData = commits.reduce<Record<string, number>>(
        (acc, { commit }) => {
          const date = dayjs(commit.author.date).format("DD/MM/YYYY"); // Formata a data
          acc[date] = (acc[date] || 0) + 1; // Incrementa o contador para o dia
          return acc;
        },
        {}
      );

      const chartData = Object.entries(groupedData).map(([date, count]) => ({
        date,
        count,
      }));

      setChartData(chartData);
    }

    calculateChartData();
  }, [commits]);

  return (
    <>
      <Title>Contagem de commits</Title>
      <ResponsiveContainer
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl"
        height={300}
      >
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
