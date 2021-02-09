module.exports = function toReadable (number) {
 let n = number;
 let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

 let largerArr = {2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 
 7:'seventy', 8:'eighty', 9:'ninety'};

 let res = '';
 
 let n3 = n%10;
 let n2 = Math.floor((n-n3)%100/10);
 let n1 = Math.floor((n-n2-n3)%1000/100);

 if(n1!=0) res+=arr[n1] + ' hundred';

 if(n2>1) {
     if(res.length>0) res+=' ';
     res+=largerArr[n2];
     if(n3!=0) res+= ' ';
     res+=arr[n3];
    }
 else {
    if(res.length>0 && n2*10+n3!=0) res+=' ';
     res+=arr[n2*10+n3]
    };
 if(!res) return 'zero';

 return res; 
}
