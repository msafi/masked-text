const createAutoCorrectedDateTimePipe = (isVerify()) ?
  require('../dist/createAutoCorrectedDateTimePipe.js').default :
  require('../src/createAutoCorrectedDateTimePipe.js').default

describe('createAutoCorrectedDateTimePipe', () => {
  let autoCorrectedDateTimePipe

  it('accepts the date time format as the first parameter and returns a date time pipe function', () => {
    autoCorrectedDateTimePipe = createAutoCorrectedDateTimePipe('MM DD YYYY hh mm ss')
  })

  it('completes the month if the 1st digit is bigger than 1 and returns `indexesOfPipedChars`', () => {
    expect(autoCorrectedDateTimePipe('1')).to.deep.equal({value: '1', indexesOfPipedChars: []})
    expect(autoCorrectedDateTimePipe('2')).to.deep.equal({value: '02', indexesOfPipedChars: [0]})
  })

  it('returns false if month 1st digit is 1 and 2nd digit is bigger than 2', () => {
    expect(autoCorrectedDateTimePipe('14')).to.equal(false)
  })

  it('returns false if month 1st digit is 0 and 2nd digit is also 0', () => {
    expect(autoCorrectedDateTimePipe('00')).to.equal(false)
  })

  it('completes the day if the 1st digit is bigger than 3 and returns `indexesOfPipedChars`', () => {
    expect(autoCorrectedDateTimePipe('12/3')).to.deep.equal({value: '12/3', indexesOfPipedChars: []})
    expect(autoCorrectedDateTimePipe('12/4')).to.deep.equal({value: '12/04', indexesOfPipedChars: [3]})
  })

  it('returns false if day 1st digit is 3 and 2nd digit is bigger than 1', () => {
    expect(autoCorrectedDateTimePipe('12/32')).to.equal(false)
  })

  it('returns false if day 1st digit is 0 and 2nd digit is also 0', () => {
    expect(autoCorrectedDateTimePipe('12/00')).to.equal(false)
  })

  it('completes the hours if the 1st digit is bigger than 2 and returns `indexesOfPipedChars`', () => {
    expect(autoCorrectedDateTimePipe('12/31/9999 1')).to.deep.equal({value: '12/31/9999 1', indexesOfPipedChars: []})
    expect(autoCorrectedDateTimePipe('12/31/9999 2')).to.deep.equal({value: '12/31/9999 2', indexesOfPipedChars: []})
    expect(
      autoCorrectedDateTimePipe('12/31/9999 3'))
        .to.deep.equal({value: '12/31/9999 03', indexesOfPipedChars: [11]}
    )
  })

  it('returns false if hours 1st digit is 2 and 2nd digit is bigger than 4', () => {
    expect(autoCorrectedDateTimePipe('12/31/9999 25')).to.equal(false)
  })

  it('completes the minutes if the 1st digit is bigger than 5 and returns `indexesOfPipedChars`', () => {
    expect(
      autoCorrectedDateTimePipe('12/31/9999 24:5'))
        .to.deep.equal({value: '12/31/9999 24:5', indexesOfPipedChars: []}
    )
    expect(
      autoCorrectedDateTimePipe('12/31/9999 24:6'))
        .to.deep.equal({value: '12/31/9999 24:06', indexesOfPipedChars: [14]}
    )
  })

  it('returns false if minutes 1st digit is 6 and 2nd digit is 0', () => {
    expect(autoCorrectedDateTimePipe('12/31/9999 24:60')).to.equal(false)
  })

  it('completes the seconds if the 1st digit is bigger than 5 and returns `indexesOfPipedChars`', () => {
    expect(
      autoCorrectedDateTimePipe('12/31/9999 24:59:5'))
        .to.deep.equal({value: '12/31/9999 24:59:5', indexesOfPipedChars: []}
    )
    expect(
      autoCorrectedDateTimePipe('12/31/9999 24:59:6'))
        .to.deep.equal({value: '12/31/9999 24:59:06', indexesOfPipedChars: [17]}
    )
  })

  it('returns false if seconds 1st digit is 6 and 2nd digit is 0', () => {
    expect(autoCorrectedDateTimePipe('12/31/9999 24:59:60')).to.equal(false)
  })

  it('returns unmodified partial entry if it could develop to correct date', () => {
    expect(
      autoCorrectedDateTimePipe('0 /  /     :  :  '))
        .to.deep.equal({value: '0 /  /     :  :  ', indexesOfPipedChars: []}
    )
  })
})
