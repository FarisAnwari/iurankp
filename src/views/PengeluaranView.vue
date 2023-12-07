<template>
  <div class="beranda">

    <main class="container d-flex flex-column ">
      <div class="row justify-content-start">
        <div class="col my-3">
          <h3 class="my-3">Pengeluaran</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <CommonCard :title="''">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Waktu</th>
                  <th scope="col">Jumlah Pengeluaran</th>
                  <th scope="col">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>11/11/2023</td>
                  <td>15.00 WIB</td>
                  <td>Rp. 50.000</td>
                  <td>Ganti Bola Lampu</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </CommonCard>
        </div>
      </div>

    </main>
  </div>
</template>
<script>
import CommonCard from '@/components/CommonCard.vue';
// import dummy from '@/dummy.json';
import favicon from '@/json/dummy.json';

export default {
  name: 'PengeluaranView',
  components: { CommonCard },
  // data () {
  //   return {
  //     myDummy: dummy
  //   }
  // }
}
</script>