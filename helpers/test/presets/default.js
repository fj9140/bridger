'use strict'


module.exports={
    transform:{
        '^.+\\.(m?j|t)s$':'@swc/jest'
    },
    testEnvironment:'node',
    testMatch:['**/src/**/*.test.ts'],
    reporters:[
        'default'
    ]
    
}