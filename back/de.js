const nodeRsa=require('node-rsa')

let private='-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXQIBAAKBgQCwQHaW51Hx19kSV6TxYck+FiiEOd7yxs//7Q/MvWlv28utxNDD\n' +
'YMt2cvKBNLle/5BE2E8LPbdLbKteNg8KSxX0qOexh5YqBeArc3LPpHgcFd/2S5yZ\n' +
'svg+IEpGKwYbTVnnt2+KtcgJHEL65FmlsdQMdbGbyFj676PcOcgauqfDjQIDAQAB\n' +
'AoGAEyBrviSMN/p8jAkG1UsPU7WD4BWHpED/AX7wX/+OGZ14lPruzMUMT2ZZ+ruG\n' +
'AlEpjs8KhOXFpmG8lxS2vR842o1soa3KGOfdSULhK7Txb3OJX1q3nZM9NbXRhfuv\n' +
'otOVgZzDTZBLk9GUjq+0nnPd+WeZdUNhM77m1QPMGsylRwECQQD4rBy4SCVzNSAH\n' +
'86CIqGe1Vxy0JBXXOnKI4nkAcMvY4M4wWKWFb1SIVYBRMRGkogRnwXsfpAk6XMUE\n' +
'qXAKUgeZAkEAtXIJ7IqJiquUfBx2l3Nl3zWGOQ4+7qWSdy5cGNCvOyf+qlUDAfF3\n' +
'WASBntiXM5+OVUABrDe2GIhRSBXKVnzEFQJBAPTHftHLesnIDoqlP22lz8hKQp/0\n' +
'MWeWSe4CeDd90LrgtzYR3ITXjO9Ssqe5VHOpZAq6ArenocnITcuD+hy+mGkCQAns\n' +
'Mp689MigmX4wEEw4A1oxkyWLoeVrKJdb8a1pvCuABG1MON3iVqR5mp0VOy+XijEf\n' +
'TvgcE9lDmy5WArq4GAECQQCIyCnLQauSTwigtZ4SOatCBk/Uw4F6tm2+IhOnljim\n' +
'lTrN3InqasYdvcOviXVGBhLF+lKHqqBLNjwWUlEB9bo3\n' +
'-----END RSA PRIVATE KEY-----'

let key_private=new nodeRsa(private)
let decrypt=key_private.decrypt("rpgMPl9jkAenBRhFgp3mTTKCpJ7z+4SqGMpyx64Olf9J5zBdwxirU+JntVbzzU5RIWT7GueoiGPfeGUbMT0p2Ro6MGHKYN1HsMTPYjvVZUu3tirQDbEOQTjZpLtZ+HB3o9PSfiTANLeQIQu6dw/wjxmsJ3x1hTTsZAx47xETA9A=",'utf8')
console.log(decrypt);