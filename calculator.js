const BMIValue = {
  healthyMin: 18.5,
  healthyMax: 23.9,
  overweightMin: 24,
  overweightMax: 27.9,
  obeseMin: 28
}

document.getElementById('calculate-button').addEventListener('click', calculateBMI);

function calculateBMI() {
  let height = document.getElementById('height-input').value;
  let weight = document.getElementById('weight-input').value;

  let resultElement = document.getElementById('result');
  
  if (height <= 0) {
    resultElement.innerText = '身高必须大于0，请重新输入';
    return;
  } else if (weight <= 0) {
    resultElement.innerText = '体重必须大于0，请重新输入';
    return;
  }

  let bmi = (weight / 2) / ((height / 100) ** 2);
  let bmiStatus = getBMIStatus(bmi);
  let minHealthyWeight = BMIValue.healthyMin * ((height / 100) ** 2) * 2;
  let maxHealthyWeight = BMIValue.healthyMax * ((height / 100) ** 2) * 2;

  resultElement.innerText = `您的BMI体重指数为: ${bmi.toFixed(1)} (${bmiStatus})`;

  let suggestionElement = document.getElementById('suggestion');
  suggestionElement.innerText = `在您身高不变的前提下，您的健康体重范围是：\n\n${minHealthyWeight.toFixed(1)}斤 - ${maxHealthyWeight.toFixed(1)}斤`;
}

function getBMIStatus(bmi) {
  if (bmi <= BMIValue.healthyMin) {
    return '偏瘦';
  } else if (bmi >= BMIValue.healthyMin && bmi < BMIValue.healthyMax) {
      return '健康体重';
  } else if (bmi >= BMIValue.overweightMin && bmi < BMIValue.overweightMax) {
      return '超重';
  } else if (bmi >= BMIValue.obeseMin) {
    return '肥胖';
  }
}