var dataJson = [
  {
    number: 0,
    title: 'Welcome to Clinique',
    question: 'How can we help you today?',
    model: 'model01',
    nextNumber: 1,
    wordColor: {
      'color': '#409238'
    },
    bgstyle: {
      backgroundColor: '#f0f0f0'
    },
    modelOption: {
      multiLine: 'flex-wrap:wrap;', //多行顯示要填入flex-wrap:wrap;
      oneLine: true,
      bigPic: false, //大圖模式要填入pic-title
      maxChoose: 1,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#696969, #949494)', 
        color: '#fff'
      },
      optionsBackcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#408d38,#60a557)',
        color: '#fff'
      },
      options: [
        {
        optionId: 'option-1',
        title: 'Clinique For Women',
        value: 'Women',
        name: 'qusetion',
        bgColor:'',
        bgColorTop: '#408d38',
        bgColorBottom: '#60a557',
        color: '#fff',
        imgSrc: ''
        },
        {
        optionId: 'option-2',
        title: 'Clinique For Men',
        value: 'Men',
        name: 'qusetion',
        bgColor: '',
        bgColorTop: '#696969',
        bgColorBottom: '#949494',
        color: '#fff',
        imgSrc: ''
        }
      ]
    }
  },
  {
      number: 1,
      title: 'What brings you to Clinique today?',
      question: 'Tap to select up to 2 skin concerns.',
      model: 'model01',
      nextNumber: 2,
      wordColor: {
        'color': '#409238'
    },
      bgstyle: {
        'background-color': '#f6f6f6'
    },
      modelOption: {
        multiLine: 'flex-wrap:wrap;', //多行顯示要填入flex-wrap:wrap;
        oneLine: false,
        bigPic: false, //大圖模式要填入pic-title
        maxChoose: 2,
        answer: [],
        optionsFroundcolor: {
          backgroundColor: '#fff',
          color: '#666'
      },
        optionsBackcolor: {
          backgroundColor: '#409238',
          color: '#fff'
      },
        options: [
        {
          optionId: 'option-1',
          title: 'Acne/​Breakouts',
          value: 'Acne/​Breakouts',
          name: 'qusetion1',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/acne.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/acneWhite.png'
        },
        {
          optionId: 'option-2',
          title: 'Daily Care',
          value: 'Daily Care',
          name: 'qusetion2',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dailyCare.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dailyCareWhite.png'
        },
        {
          optionId: 'option-3',
          title: 'Dark Spots/Uneven Skin Tone',
          value: 'Dark Spots/Uneven Skin Tone',
          name: 'qusetion3',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/darkSpots.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/darkSpotsWhite.png'
        },
        {
          optionId: 'option-4',
          title: 'Dryness',
          value: 'Dryness',
          name: 'qusetion3',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dryness.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/drynessWhite.png'
        },
        {
          optionId: 'option-5',
          title: 'Eye Area',
          value: 'Eye Area',
          name: 'qusetion5',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/eyeArea.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/eyeAreaWhite.png'
        },
        {
          optionId: 'option-6',
          title: 'Firming/​Lifting',
          value: 'Firming/​Lifting',
          name: 'qusetion6',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/lifting.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/liftingWhite.png'
        },
        {
          optionId: 'option-7',
          title: 'Lines/​Wrinkles',
          value: 'Lines/​Wrinkles',
          name: 'qusetion7',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/lines.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/linesWhite.png'
        },
        {
          optionId: 'option-8',
          title: 'Pores',
          value: 'Pores',
          name: 'qusetion8',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/pores.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/poresWhite.png'
        },
        {
          optionId: 'option-9',
          title: 'Radiance',
          value: 'Radiance',
          name: 'qusetion8',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/radiance.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/radianceWhite.png'
        },
        {
          optionId: 'option-10',
          title: 'Redness',
          value: 'Redness',
          name: 'qusetion8',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/redness.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/rednessWhite.png'
        },
        {
          optionId: 'option-11',
          title: 'Sensitivity',
          value: 'Sensitivity',
          name: 'qusetion8',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sensitivity.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sensitivityWhite.png'
        },
        {
          optionId: 'option-12',
          title: 'Sun Protection',
          value: 'Sun Protection',
          name: 'qusetion8',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sun.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sunWhite.png'
        }
      ]
    }
  },
  {
    number: 2,
    title: "What's your age group ?",
    question: '',
    answer: '',
    model: 'model01',
    nextNumber: 3,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    modelOption: {
      multiLine: '', //多行顯示要填入flex-wrap:wrap;
      oneLine: true,
      bigPic: false, //大圖模式要填入pic-title
      maxChoose: 1,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '#fff',
        color: '#666'
      },
      optionsBackcolor: {
        backgroundColor: '#409238',
        color: '#fff'
      },
      options: [
        {
        optionId: 'option-1',
        title: '0-18',
        value: '0-18',
        name: 'qusetion',
        imgFrontSrc:''
        },
        {
        optionId: 'option-2',
        title: '19-29',
        value: '19-29',
        name: 'qusetion',
        imgFrontSrc:''
        },
        {
        optionId: 'option-3',
        title: '20-49',
        value: '20-49',
        name: 'qusetion',
        imgFrontSrc:''
        },
        {
        optionId: 'option-4',
        title: '50-69',
        value: '50-69',
        name: 'qusetion',
        imgFrontSrc:''
        },
        {
        optionId: 'option-5',
        title: '70+',
        value: '70+',
        name: 'qusetion',
        imgFrontSrc:''
        }
      ]
    }
  },
  {
    number: 3,
    title: 'How many hours do you sleep on average?',
    question: "We ask because poor sleep can affect skin's well - being.",
    model: 'model02',
    nextNumber: 4,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    modelOption: {
      answer: []
    }
  },
  {
    number: 4,
    title: 'What kind of sun exposure do you get on an average day?',
    question: '',
    model: 'model01',
    nextNumber: 5,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    modelOption: {
      multiLine: '', //多行顯示要填入flex-wrap:wrap;
      oneLine: true,
      bigPic: true, //大圖模式要填入pic-title
      maxChoose: 1,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#696969, #949494)',
        color: '#fff'
      },
      optionsBackcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#408d38,#60a557)',
        color: '#fff'
      },
      options: [
        {
        optionId: 'option-1',
        title: 'Walking around',
        value: 'Walking around',
        name: 'qusetion',
        imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face.png',
        imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face.png'
        },
        {
        optionId: 'option-2',
        title: 'Many hours spent outdoors',
        value: 'Many hours spent outdoors',
        name: 'qusetion',
        imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face-men-transparent.png',
        imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face-men-transparent.png'
        }
      ]
    }
  },
  {
    number: 5,
    title: 'Which skin tone is closest to yours?',
    question: '',
    model: 'model03',
    nextNumber: 0,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    modelOption: {
      answer: [],
      rangeBgColorLeft: '#865649',
      rangeBgColorRight: '#f4e2d3',
      options: [
        {
        title: 'Deep',
        imgSrc: 'https://www.clinique.com/media/images/foundation-finder/D7.jpg'
        },
        {
        title: 'Medium',
        imgSrc: 'https://www.clinique.com/media/images/foundation-finder/D3.jpg'
        },
        {
        title: 'Moderately Fair',
        imgSrc: 'https://www.clinique.com/media/images/foundation-finder/M3.jpg'
        },
        {
        title: 'Very Fair',
        imgSrc: 'https://www.clinique.com/media/images/foundation-finder/VF4.jpg'
        }
      ]
    }
  }
];