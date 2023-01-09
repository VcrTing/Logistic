<template>
    <router-view/>
    <!--
    <div>
        TS 研究日志
    </div>
    <router-view/>
    <div class="py_x2">
        <button class="btn-pri-tin" @click="testing">测试网络获取数据至 Typescript</button>
    </div>
    -->
</template>

<script setup lang="ts">
enum Gender {
    Boy, Girl
}

enum Age {
    chiid = 6,
    young = 18,
    guy = 30,
    oid = 60
}


interface Humen {
    gender: Gender,
    name: string,
    age: Age
}

interface Person extends Humen {
    identity: string,
    photo: string,
}

const pers: Person = {
    gender: Gender.Boy,
    name: '张三',
    photo: '',
    age: Age.oid,
    identity: "X000000001"
}

const get_from_net = (): Promise<ONE | null> => {
    return new Promise(rej => {
        setTimeout(() => {
            const res = {
                name: '里斯',
                gender: 1,
                age: 18,
                // identity: 'X000000002'
            }
            rej( res )
        }, 400)
    })
}

const testing = async () => {
    const netRes = (await get_from_net())
    if (netRes) {
        const pers_of_net: Person = netRes as Person
        console.log('Age[ pers_of_net.age ] =', pers_of_net.age, Age[ pers_of_net.age ])
        console.log('从网络上获取到的值 =', pers_of_net)
    }
}

</script>