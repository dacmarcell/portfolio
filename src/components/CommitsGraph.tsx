import { Commit } from "@/app/repositorios/repositorio/page";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface CommitsGraphProps {
  commits: Array<Commit>;
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
          const date = dayjs(commit.author.date).format("YYYY-MM-DD"); // Formata a data
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
    <ResponsiveContainer width="100%" height={400}>
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
  );
}
