import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";
import { getExpenses } from "../../Apis/expenses/expenses";
import { useEffect, useState } from "react";
import { getExpensesType } from "../../Apis/expenses/type";

export const Graph = () => {
    const [expenses, setExpenses] = useState<getExpensesType>();

    useEffect(() => {
        getExpenses()
            .then((response) => {
                setExpenses(response.data);
            })
            .catch((error) => {
                console.error("올해 지출 내역 그래프 오류:", error);
            });
    }, []);

    const expenseData = expenses?.expenseData.map((item) => item.expense) || Array(12).fill(0);

    const series = [
        {
            name: "Expenses",
            data: expenseData,
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "area",
            height: 350,
            background: "linear-gradient(180deg, #ffa76d 0%, #ffc49d 12%, #ffffff 100%)",
            fontFamily: "Pretendard-Light",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            },
        },
        colors: ["#FF802C"],
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 0,
        },
        xaxis: {
            categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
    };

    return (
        <GraphWrapper>
            <ReactApexChart options={options} series={series} type="area" height={224} width="100%" />
        </GraphWrapper>
    );
};

const GraphWrapper = styled.div`
    border-radius: 5px;
    overflow: hidden;
    width: 85vw;
`;
