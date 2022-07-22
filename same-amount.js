const sameAmount = (dataStr, reg1, reg2) => {
    reg1 = new RegExp(reg1, 'g')
    reg2 = new RegExp(reg2, 'g')
    const index1 = dataStr.match(reg1)
    const index2 = dataStr.match(reg2)
    return index1?.length === index2?.length ?? false;
}

