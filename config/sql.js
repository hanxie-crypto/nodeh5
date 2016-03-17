module.exports = {
    GET_DADA_TOTALS: 'select FOUND_ROWS() total FROM DUAL ',
    adduserimg: 'insert into userimg (userimg,datetime)' +
        'values(:userimg,:datetime)',
    finduserimg: 'select * from userimg limit :start,:count',
    addgdmfuserimg: 'insert into gdmfuserimg (userimg,datetime)' +
        'values(:userimg,:datetime)',
    findgdmfuserimg: 'select * from gdmfuserimg limit :start,:count',
    addcpuserimg: 'insert into cpuserimg (userimg,datetime)' +
        'values(:userimg,:datetime)',
    findcpuserimg: 'select * from cpuserimg limit :start,:count',
    addpopularuserimg: 'insert into popularuserimg (userimg,datetime)' +
        'values(:userimg,:datetime)',
    findpopularuserimg: 'select * from popularuserimg limit :start,:count'
}