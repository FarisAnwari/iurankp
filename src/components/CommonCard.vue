<template>
  <!-- <div class="card mx-3 rounded-5">
    <div class="card-body">
      <h5 class="card-title text-left">{{ title }}</h5>
      <slot></slot>
    </div>
  </div> -->
  <div class="shadow card border-primary m-3 rounded-5">
    <div class="card-header" style="background-color: #ffffff;">
      <div class="card-title text-left">{{ title }}</div>
      <div class="card-tools">
        <!-- Buttons, labels, and many other things can be placed here! -->
        <!-- Here is a label for example -->
      </div>
      <!-- /.card-tools -->
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <slot></slot>
    </div>
    <!-- /.card-body -->
    <!-- /.card-footer -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  props: ['title']
}
</script>