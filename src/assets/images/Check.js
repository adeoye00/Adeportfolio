import React from "react";
import "./style.css";

const Check = (props) => {
    return (
        <svg width="385" height="34" viewBox="0 0 385 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="385" height="34" fill="#E5E5E5"/>
<path d="M21.2563 26.4082H9.69873L7.50146 33H0.492188L12.4014 1.00781H18.5098L30.4849 33H23.4756L21.2563 26.4082ZM11.4785 21.0688H19.4766L15.4556 9.09375L11.4785 21.0688ZM33.4731 33V1.00781H43.3169C46.1294 1.00781 48.6416 1.64502 50.8535 2.91943C53.0801 4.1792 54.8159 5.98096 56.061 8.32471C57.3062 10.6538 57.9287 13.3052 57.9287 16.2788V17.751C57.9287 20.7246 57.3135 23.3687 56.083 25.6831C54.8672 27.9976 53.146 29.792 50.9194 31.0664C48.6929 32.3408 46.1807 32.9854 43.3828 33H33.4731ZM40.0649 6.34717V27.7046H43.251C45.8291 27.7046 47.7993 26.8623 49.1616 25.1777C50.5239 23.4932 51.2197 21.0835 51.249 17.9487V16.2568C51.249 13.0049 50.5752 10.5439 49.2275 8.87402C47.8799 7.18945 45.9097 6.34717 43.3169 6.34717H40.0649ZM81.9888 19.1353H69.3325V27.7046H84.186V33H62.7407V1.00781H84.1421V6.34717H69.3325V13.9717H81.9888V19.1353ZM114.333 17.729C114.333 20.8784 113.776 23.6396 112.663 26.0127C111.549 28.3857 109.953 30.2168 107.873 31.5059C105.807 32.7949 103.434 33.4395 100.753 33.4395C98.1021 33.4395 95.7363 32.8022 93.6562 31.5278C91.5762 30.2534 89.9648 28.437 88.8223 26.0786C87.6797 23.7056 87.1011 20.981 87.0864 17.9048V16.3228C87.0864 13.1733 87.6504 10.4048 88.7783 8.01709C89.9209 5.61475 91.5249 3.77637 93.5903 2.50195C95.6704 1.21289 98.0435 0.568359 100.709 0.568359C103.375 0.568359 105.741 1.21289 107.807 2.50195C109.887 3.77637 111.491 5.61475 112.619 8.01709C113.761 10.4048 114.333 13.166 114.333 16.3008V17.729ZM107.653 16.2788C107.653 12.9243 107.052 10.3755 105.851 8.63232C104.65 6.88916 102.936 6.01758 100.709 6.01758C98.4976 6.01758 96.791 6.88184 95.5898 8.61035C94.3887 10.3242 93.7808 12.8438 93.7661 16.1689V17.729C93.7661 20.9956 94.3667 23.5298 95.5679 25.3315C96.769 27.1333 98.4976 28.0342 100.753 28.0342C102.965 28.0342 104.665 27.1699 105.851 25.4414C107.038 23.6982 107.638 21.1641 107.653 17.8389V16.2788ZM129.186 15.4219L135.844 1.00781H143.051L132.548 21.3984V33H125.846V21.3984L115.343 1.00781H122.572L129.186 15.4219ZM165.221 19.1353H152.565V27.7046H167.418V33H145.973V1.00781H167.375V6.34717H152.565V13.9717H165.221V19.1353ZM171.198 29.8799C171.198 28.8691 171.535 28.0488 172.208 27.4189C172.897 26.7891 173.754 26.4741 174.779 26.4741C175.819 26.4741 176.676 26.7891 177.35 27.4189C178.039 28.0488 178.383 28.8691 178.383 29.8799C178.383 30.876 178.046 31.689 177.372 32.3188C176.698 32.9341 175.834 33.2417 174.779 33.2417C173.739 33.2417 172.882 32.9341 172.208 32.3188C171.535 31.689 171.198 30.876 171.198 29.8799ZM202.443 26.4082H190.885L188.688 33H181.679L193.588 1.00781H199.696L211.671 33H204.662L202.443 26.4082ZM192.665 21.0688H200.663L196.642 9.09375L192.665 21.0688ZM214.66 33V1.00781H224.503C227.316 1.00781 229.828 1.64502 232.04 2.91943C234.267 4.1792 236.002 5.98096 237.248 8.32471C238.493 10.6538 239.115 13.3052 239.115 16.2788V17.751C239.115 20.7246 238.5 23.3687 237.27 25.6831C236.054 27.9976 234.333 29.792 232.106 31.0664C229.879 32.3408 227.367 32.9854 224.569 33H214.66ZM221.251 6.34717V27.7046H224.438C227.016 27.7046 228.986 26.8623 230.348 25.1777C231.71 23.4932 232.406 21.0835 232.436 17.9487V16.2568C232.436 13.0049 231.762 10.5439 230.414 8.87402C229.066 7.18945 227.096 6.34717 224.503 6.34717H221.251ZM263.175 19.1353H250.519V27.7046H265.373V33H243.927V1.00781H265.329V6.34717H250.519V13.9717H263.175V19.1353ZM287.301 26.4082H275.744L273.546 33H266.537L278.446 1.00781H284.555L296.53 33H289.521L287.301 26.4082ZM277.523 21.0688H285.521L281.5 9.09375L277.523 21.0688ZM324.347 28.957C323.161 30.3779 321.483 31.4839 319.315 32.2749C317.147 33.0513 314.745 33.4395 312.108 33.4395C309.34 33.4395 306.908 32.8389 304.813 31.6377C302.733 30.4219 301.122 28.6641 299.979 26.3643C298.852 24.0645 298.273 21.3618 298.244 18.2563V16.0811C298.244 12.8877 298.778 10.1265 299.848 7.79736C300.932 5.45361 302.484 3.6665 304.506 2.43604C306.542 1.19092 308.922 0.568359 311.647 0.568359C315.441 0.568359 318.407 1.47656 320.546 3.29297C322.685 5.09473 323.952 7.72412 324.347 11.1812H317.931C317.638 9.3501 316.986 8.00977 315.976 7.16016C314.979 6.31055 313.603 5.88574 311.845 5.88574C309.604 5.88574 307.897 6.72803 306.725 8.4126C305.553 10.0972 304.96 12.6021 304.945 15.9272V17.9707C304.945 21.3252 305.583 23.8594 306.857 25.5732C308.131 27.2871 309.999 28.144 312.46 28.144C314.936 28.144 316.701 27.6167 317.755 26.562V21.0469H311.757V16.1909H324.347V28.957ZM329.708 33V1.00781H340.915C344.796 1.00781 347.741 1.75488 349.748 3.24902C351.754 4.72852 352.758 6.90381 352.758 9.7749C352.758 11.3423 352.355 12.7266 351.549 13.9277C350.744 15.1143 349.623 15.9858 348.188 16.5425C349.828 16.9526 351.117 17.7803 352.055 19.0254C353.007 20.2705 353.483 21.7939 353.483 23.5957C353.483 26.6719 352.501 29.001 350.539 30.583C348.576 32.165 345.778 32.9707 342.145 33H329.708ZM336.3 19.0693V27.7046H341.947C343.5 27.7046 344.708 27.3384 345.573 26.606C346.452 25.8589 346.891 24.8335 346.891 23.5298C346.891 20.6001 345.375 19.1133 342.343 19.0693H336.3ZM336.3 14.4111H341.178C344.503 14.3525 346.166 13.0269 346.166 10.4341C346.166 8.98389 345.741 7.94385 344.892 7.31396C344.057 6.66943 342.731 6.34717 340.915 6.34717H336.3V14.4111ZM384.728 17.729C384.728 20.8784 384.171 23.6396 383.058 26.0127C381.945 28.3857 380.348 30.2168 378.268 31.5059C376.203 32.7949 373.83 33.4395 371.149 33.4395C368.498 33.4395 366.132 32.8022 364.052 31.5278C361.972 30.2534 360.36 28.437 359.218 26.0786C358.075 23.7056 357.497 20.981 357.482 17.9048V16.3228C357.482 13.1733 358.046 10.4048 359.174 8.01709C360.316 5.61475 361.92 3.77637 363.986 2.50195C366.066 1.21289 368.439 0.568359 371.105 0.568359C373.771 0.568359 376.137 1.21289 378.202 2.50195C380.282 3.77637 381.886 5.61475 383.014 8.01709C384.157 10.4048 384.728 13.166 384.728 16.3008V17.729ZM378.048 16.2788C378.048 12.9243 377.448 10.3755 376.247 8.63232C375.045 6.88916 373.332 6.01758 371.105 6.01758C368.893 6.01758 367.187 6.88184 365.985 8.61035C364.784 10.3242 364.176 12.8438 364.162 16.1689V17.729C364.162 20.9956 364.762 23.5298 365.963 25.3315C367.165 27.1333 368.893 28.0342 371.149 28.0342C373.361 28.0342 375.06 27.1699 376.247 25.4414C377.433 23.6982 378.034 21.1641 378.048 17.8389V16.2788Z" fill="#5219B0"/>
</svg>
    );
};

export default Check;