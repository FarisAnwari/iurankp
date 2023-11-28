<template>
  <div class="beranda">

    <main class="container d-flex flex-column ">
      <div class="row">
        <div class="col my-3">
          <img lat="Blank acc" src="@/assets/blankacc.png">
          <h3 class="my-3">Selamat datang, Pak Fulan</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <CommonCard :title="'Tagihan Iuran'">
            <div class="card-group">
              <CommonCard :title="'Agustus 2023'">
                Rp. 15.000,00
              </CommonCard>
              <CommonCard :title="'September 2023'">
                Rp. 15.000,00
              </CommonCard>
              <CommonCard :title="'Oktober 2023'">
                Rp. 15.000,00
              </CommonCard>
            </div>
          </CommonCard>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <CommonCard :title="'Data Pengeluaran RT (2023)'">

          </CommonCard>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import CommonCard from '@/components/CommonCard.vue';

export default {
  name: 'BerandaView',
  components: { CommonCard }
}
</script>