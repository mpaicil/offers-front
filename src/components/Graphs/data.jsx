
const data = {
    //Bring in data
    labels: ["Jan", "Feb", "March"],
    datasets: [
        {
            label: "Sales",
            data: [86, 67, 91],
        }
    ]
}
//https://codepen.io/k3no/pen/pbYGVa
//https://www.hexcolortool.com/#0e57aa
//rgba(14, 170, 84, 1) verde
//rgba(14, 87, 170, 1) azul

const multidata = {
    datasets: [{
        label: 'Bar Dataset',
        data: [10, 20, 30, 40]
    }, {
        label: 'Line Dataset',
        data: [50, 50, 35, 50],

        // Changes this dataset to become a line
        type: 'line'
    }],
    labels: ['January', 'February', 'March', 'April']
}

const realdata = {
    datasets: [{
        label: 'Min Ask',
        data: [ 9205989.0 , 9205989.0 , 9204779.0 , 9203867.0 , 9204791.0 , 9249998.0 , 9229965.0 , 9249998.0 , 9249998.0 ]
    }, {
        label: 'Max Bid',
        data: [  9189339.0 , 9200000.0 , 9200000.0 , 9200000.0 , 9200000.0 , 9240000.0 , 9200010.0 , 9200010.0 , 9249800.0 ],

        // Changes this dataset to become a line
        type: 'line'
    }],
    labels: [ '12:25:58' , '12:30:58' , '12:35:59' , '12:41:00' , '12:46:00' , '12:51:01' , '12:56:02' , '13:01:03' , '13:06:04' ]
}

export default data

export { multidata, realdata }