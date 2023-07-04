function Time() {
    const countWords=(txt)=> {
        
        
    } 

    function getWordCount(str) {
        return str.split(' ')
          .filter(function(n) { return n != '' })
          .length;
   }

    const estTime=()=> {

    }
    var st = "fgfdg fgh ghtg ghtrhret ghthth gbrehg"
    return (
        <div>
            <p> Time estimated:
            </p>
            <p>total words: {getWordCount(st)} </p>

        </div>
    )

}

export default Time;