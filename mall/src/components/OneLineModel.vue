<template>
    <div>
      <div class="md-modal md-modal-small md-modal-oneline modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
        <div class="md-modal-inn-sm md-modal-inner">
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        props:["mdShow"]
    }
</script>
