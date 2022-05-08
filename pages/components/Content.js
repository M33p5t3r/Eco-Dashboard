import React from 'react'
import styles from './../../styles/Home.module.css'
import { faDotCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
ArcElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import verified from './../../public/verified.png'
import money from './../../public/money.png'
import contactus from './../../public/contactus.jpg'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

//Multiline chart data set
const data = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	datasets: [
    {
      label: 'Total',
     data: [609, 703, 589, 540, 242, 301, 816],
      borderColor: '#2ad7f3',
      backgroundColor: '#2ad7f3',
      yAxisID: 'y',
    },
    {
      label: 'Pipeline',
     data: [400, 320, 570, 332, 715, 691, 571, 690],
      borderColor: '#874aff',
      backgroundColor: '#874aff',
    },
  ],
};

//doughnut chart data set
const data1 = {
	labels: ["Sent", "Received"],
	datasets: [
		{
			data: [345, 194],
			backgroundColor: ["#874aff", "#2ad7f3", ],
			hoverBackgroundColor: ["#874aff", "#2ad7f3"],
		},
	],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

//multibar chart data set
export const data2 = {
  labels: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D",
	],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      backgroundColor: '#874aff',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      backgroundColor: '#2ad7f3',
      stack: 'Stack 0',
    },
  ],
}

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
    legend: {
      display: false,
    },
  },
  },
plugins: {
    legend: {
      display: false,
    },
  },
};


export const Content = () => {
  return (
    <div className={styles.contentContainer}>

      {/* Main Content Header */}
      <div className={styles.contentHeader}>
        <h2>Sales</h2>
        <p>Welcome to the CRM dashboard</p>
      </div>
      <div className={styles.contentwrapper}>

        {/* Tab Columns */}
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h5>Emails Sent</h5>
            <Doughnut data={data1} width={200} height={200} options={options}  />
            <ul className={styles.legend}>
              <li><FontAwesomeIcon icon={faDotCircle} style={{width:"12px", cursor:"pointer"}} /> Sent</li> 
              <li><FontAwesomeIcon icon={faDotCircle} style={{width:"12px", cursor:"pointer"}} /> Received</li>
            </ul>

          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h5>User Activity</h5>
            <Bar data={data2} width={400} height={200} options={config}  />
          </div>
        </div>
        <div className={styles.splitabs}>
            <div className={styles.tabs}>
               <div className={styles.categories}>
                <div>
                  <Image src={verified} alt="verified" className={styles.image} width="60px" height="200px" layout="responsive" objectFit="cover"/>
                </div>
                 <div>
                  <h4>$4,250</h4>
                  <span>Earned this month</span>
                </div>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <div>
                  <Image src={money} alt="money" className={styles.image} width="60px" height="200px" layout="responsive" objectFit="cover"/>
                </div>
                 <div>
                  <h4>198</h4>
                  <span>New clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-line Chart */}
        <div className={styles.charts}>
          <div className={styles.bar}>
            <h5>Sales</h5>
            <h1>$34,4K</h1>
            <span>Overall Revenue</span>
            <ul className={styles.legend}>
              <li><FontAwesomeIcon icon={faDotCircle} style={{width:"12px", cursor:"pointer"}} /> Total</li> 
              <li><FontAwesomeIcon icon={faDotCircle} style={{width:"12px", cursor:"pointer"}} /> Pipeline</li>
            </ul>
            <Line data={data} width={600} options={options} height={150}/>
          </div>
          <div className={styles.mastfooter}>
            <div className={styles.categories}>
                 <div>
                  <Image src={contactus} alt="Contact" width="100px" height="80px" layout="responsive" objectFit="contain"/>
                  <a href="tel:0616314306" className={styles.secondarybtn}><FontAwesomeIcon icon={faPhone} style={{width:"12px", cursor:"pointer"}} /> Call Now</a>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Content;
