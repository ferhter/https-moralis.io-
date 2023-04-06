
    if
      local.get $var6
      local.get $var1
      local.get $var2
      call $func81
      return
    end
    local.get $var1
    i32.load offset=36
    local.set $var8
    block $label0
      local.get $var1
      i32.load offset=12
      local.tee $var3
      local.get $var1
      i32.load offset=16
      local.tee $var4
      i32.ge_u
      if
        i32.const -5
        local.set $var3
        local.get $var1
        i32.load
        i32.const 4
        local.get $var4
        local.get $var4
        i32.const 1
        i32.lt_s
        select
        local.get $var4
        i32.add
        local.tee $var4
        i32.const 20
        i32.mul
        call $func226
        local.tee $var5
        i32.eqz
        br_if $label0
        local.get $var1
        local.get $var5
        i32.store
        local.get $var1
        i32.load offset=4
        local.get $var4
        i32.const 2
        i32.shl
        call $func226
        local.tee $var5
        i32.eqz
        br_if $label0
        local.get $var1
        local.get $var4
        i32.store offset=16
        local.get $var1
        local.get $var5
        i32.store offset=4
        local.get $var1
        i32.load offset=12
        local.set $var3
      end
      local.get $var1
      local.get $var3
      i32.const 1
      i32.add
      i32.store offset=12
      local.get $var1
      local.get $var1
      i32.load
      local.get $var3
      i32.const 20
      i32.mul
      i32.add
      local.tee $var3
      i32.store offset=8
      local.get $var3
      i32.const 0
      i32.store offset=16
      local.get $var3
      i64.const 0
      i64.store offset=8 align=4
      local.get $var3
      i64.const 0
      i64.store align=4
      local.get $var1
      i32.load offset=4
      local.get $var1
      i32.load offset=8
      local.get $var1
      i32.load
      i32.sub
      i32.const 20
      i32.div_s
      i32.const 2
      i32.shl
      i32.add
      i32.const 69
      i32.store
      local.get $var1
      i32.load offset=8
      local.get $var1
      i32.load offset=36
      i32.store offset=4
      local.get $var1
      local.get $var1
      i32.load offset=36
      i32.const 1
      i32.add
      i32.store offset=36
      local.get $var6
      local.get $var1
      local.get $var2
      call $func81
      local.set $var3
      local.get $var7
      i32.eqz
      br_if $label0
      local.get $var3
      br_if $label0
      block $label4
        block $label6 (result i32)
          block $label5
            block $label3
              block $label2
                block $label1
                  local.get $var7
                  i32.const 1
                  i32.sub
                  br_table $label1 $label2 $label3 $label4
                end $label1
                local.get $var1
                i32.load offset=12
                local.tee $var3
                local.get $var1
                i32.load offset=16
                local.tee $var0
                i32.ge_u
                if
                  i32.const -5
                  local.set $var3
                  local.get $var1
                  i32.load
                  i32.const 4
                  local.get $var0
                  local.get $var0
                  i32.const 1
                  i32.lt_s
                  select
                  local.get $var0
                  i32.add
                  local.tee $var0
                  i32.const 20
                  i32.mul
                  call $func226
                  local.tee $var2
                  i32.eqz
                  br_if $label0
                  local.get $var1
                  local.get $var2
                  i32.store
                  local.get $var1
                  i32.load offset=4
                  local.get $var0
                  i32.const 2
                  i32.shl
                  call $func226
                  local.tee $var2
                  i32.eqz
                  br_if $label0
                  local.get $var1
                  local.get $var0
                  i32.store offset=16
                  local.get $var1
                  local.get $var2
                  i32.store offset=4
                  local.get $var1
                  i32.load offset=12
                  local.set $var3
                end
                local.get $var1
                i32.load
                local.get $var3
                i32.const 20
                i32.mul
                i32.add
                local.set $var0
                br $label5
              end $label2
              local.get $var1
              i32.load offset=16
              local.set $var2
              local.get $var1
              i32.load offset=12
              local.set $var3
              local.get $var0
              i32.load8_u offset=6
              i32.const 16
              i32.and
              if
                local.get $var2
                local.get $var3
                i32.le_u
                if
                  i32.const -5
                  local.set $var3
                  local.get $var1
                  i32.load
                  i32.const 4
                  local.get $var2
                  local.get $var2
                  i32.const 1
                  i32.lt_s
                  select
                  local.get $var2
                  i32.add
                  local.tee $var0
                  i32.const 20
                  i32.mul
                  call $func226
                  local.tee $var2
                  i32.eqz
                  br_if $label0
                  local.get $var1
                  local.get $var2
                  i32.store
                  local.get $var1
                  i32.load offset=4
                  local.get $var0
                  i32.const 2
                  i32.shl
                  call $func226
                  local.tee $var2
                  i32.eqz
                  br_if $label0
                  local.get $var1
                  local.get $var0
                  i32.store offset=16
                  local.get $var1
                  local.get $var2
                  i32.store offset=4
                  local.get $var1
                  i32.load offset=12
                  local.set $var3
                end
                local.get $var1
                local.get $var1
                i32.load
                local.get $var3
                i32.const 20
                i32.mul
                i32.add
                local.tee $var0
                i32.store offset=8
                i32.const 71
                br $label6
              end
              local.get $var2
              local.get $var3
              i32.le_u
              if
                i32.const -5
                local.set $var3
                local.get $var1
                i32.load
                i32.const 4
                local.get $var2
                local.get $var2
                i32.const 1
                i32.lt_s
                select
                local.get $var2
                i32.add
                local.tee $var0
                i32.const 20
                i32.mul
                call $func226
                local.tee $var2
                i32.eqz
                br_if $label0
                local.get $var1
                local.get $var2
                i32.store
                local.get $var1
                i32.load offset=4
                local.get $var0
                i32.const 2
                i32.shl
                call $func226
                local.tee $var2
                i32.eqz
                br_if $label0
                local.get $var1
                local.get $var0
                i32.store offset=16
                local.get $var1
                local.get $var2
                i32.store offset=4
                local.get $var1
                i32.load offset=12
                local.set $var3
              end
              local.get $var1
              i32.load
              local.get $var3
              i32.const 20
              i32.mul
              i32.add
              local.set $var0
              br $label5
            end $label3
            local.get $var1
            i32.load offset=12
            local.tee $var3
            local.get $var1
            i32.load offset=16
            local.tee $var0
            i32.ge_u
            if
              i32.const -5
              local.set $var3
              local.get $var1
              i32.load
              i32.const 4
              local.get $var0
              local.get $var0
              i32.const 1
              i32.lt_s
              select
              local.get $var0
              i32.add
              local.tee $var0
              i32.const 20
              i32.mul
              call $func226
              local.tee $var2
              i32.eqz
              br_if $label0
              local.get $var1
              local.get $var2
              i32.store
              local.get $var1
              i32.load offset=4
              local.get $var0
              i32.const 2
              i32.shl
              call $func226
              local.tee $var2
              i32.eqz
              br_if $label0
              local.get $var1
              local.get $var0
              i32.store offset=16
              local.get $var1
              local.get $var2
              i32.store offset=4
              local.get $var1
              i32.load offset=12
              local.set $var3
            end
            local.get $var1
            local.get $var1
            i32.load
            local.get $var3
            i32.const 20
            i32.mul
            i32.add
            local.tee $var0
            i32.store offset=8
            i32.const 72
            br $label6
          end $label5
          local.get $var1
          local.get $var0
          i32.store offset=8
          i32.const 70
        end $label6
        local.set $var2
        local.get $var1
        local.get $var3
        i32.const 1
        i32.add
        i32.store offset=12
        local.get $var0
        i32.const 0
        i32.store offset=16
        local.get $var0
        i64.const 0
        i64.store offset=8 align=4
        local.get $var0
        i64.const 0
        i64.store align=4
        local.get $var1
        i32.load offset=4
        local.get $var1
        i32.load offset=8
        local.get $var1
        i32.load
        i32.sub
        i32.const 20
        i32.div_s
        i32.const 2
        i32.shl
        i32.add
        local.get $var2
        i32.store
      end $label4
      local.get $var1
      i32.load offset=8
      local.get $var8
      i32.store offset=4
      i32.const 0
      local.set $var3
    end $label0
    local.get $var3
  )
  (func $func96 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    local.get $var0
    i32.const 396
    call $func223
    local.tee $var4
    i32.store
    local.get $var4
    i32.eqz
    if
      i32.const -5
      return
    end
    i32.const 273180
    i32.load
    local.set $var6
    local.get $var4
    i32.const 0
    i32.const 396
    call $func231
    local.set $var4
    block $label0
      i32.const 294076
      i32.load8_u
      i32.eqz
      if
        i32.const 294100
        i32.load8_u
        i32.eqz
        if
          i32.const 294100
          i32.const 1
          i32.store8
        end
        i32.const 294076
        i32.const 1
        i32.store8
        call $func129
        br_if $label0
        i32.const 272892
        i32.load
        local.tee $var5
        i32.const 1
        i32.ne
        if
          i32.const 1170
          local.get $var5
          call_indirect (param i32)
        end
      end
      local.get $var3
      i32.load offset=12
      local.set $var5
      local.get $var4
      i32.const 0
      i32.store offset=392
      local.get $var4
      i32.const 0
      i32.store offset=116
      local.get $var4
      local.get $var3
      i32.store offset=80
      local.get $var4
      i32.const 293592
      i32.store offset=72
      local.get $var4
      i64.const 0
      i64.store offset=88 align=4
      local.get $var4
      i32.const 0
      i32.store offset=16
      local.get $var4
      i64.const 0
      i64.store offset=8 align=4
      local.get $var4
      i32.const 0
      i32.store
      local.get $var4
      local.get $var6
      i32.store offset=84
      local.get $var4
      local.get $var5
      i32.const 256
      i32.or
      i32.store offset=76
      local.get $var0
      i32.load
      local.get $var1
      local.get $var2
      call $func65
      local.tee $var4
      if (result i32)
        local.get $var0
        i32.load
        local.tee $var3
        if
          local.get $var3
          call $func64
          local.get $var3
          call $func224
        end
        local.get $var0
        i32.const 0
        i32.store
        local.get $var4
      else
        i32.const 0
      end
      return
    end $label0
    local.get $var0
    i32.load
    call $func224
    local.get $var0
    i32.const 0
    i32.store
    i32.const -23
  )
  (func $func97 (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    local.get $var0
    i32.const 4
    i32.add
    local.set $var4
    local.get $var0
    i32.load
    local.tee $var5
    if
      local.get $var5
      local.set $var0
      loop $label0
        local.get $var0
        local.get $var2
        i32.add
        local.tee $var3
        i32.const 1
        i32.shr_u
        local.tee $var7
        i32.const 1
        i32.add
        local.get $var2
        local.get $var4
        local.get $var3
        i32.const 2
        i32.shl
        i32.const 4
        i32.or
        i32.add
        i32.load
        local.get $var1
        i32.lt_u
        local.tee $var3
        select
        local.tee $var2
        local.get $var0
        local.get $var7
        local.get $var3
        select
        local.tee $var0
        i32.lt_u
        br_if $label0
      end $label0
    end
    local.get $var2
    local.get $var5
    i32.lt_u
    if (result i32)
      local.get $var4
      local.get $var2
      i32.const 3
      i32.shl
      i32.add
      i32.load
      local.get $var1
      i32.le_u
    else
      local.get $var6
    end
  )
  (func $func98 (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    block $label1 (result i32)
      block $label3
        block $label2
          block $label0
            local.get $var0
            i32.load offset=12
            i32.const 2
            i32.ge_s
            br_if $label0
            i32.const 0
            local.get $var1
            local.get $var0
            i32.load offset=24
            call_indirect (param i32) (result i32)
            local.tee $var0
            i32.const 0
            i32.lt_s
            br_if $label1
            drop
            local.get $var1
            i32.const 255
            i32.gt_u
            br_if $label0
            local.get $var0
            i32.const 2
            i32.lt_s
            br_if $label2
          end $label0
          local.get $var2
          i32.load offset=48
          local.tee $var0
          i32.eqz
          if
            br $label3
          end
          local.get $var0
          i32.load
          local.tee $var3
          i32.const 4
          i32.add
          local.set $var6
          i32.const 0
          local.set $var0
          local.get $var3
          i32.load
          local.tee $var7
          if
            local.get $var7
            local.set $var3
            loop $label4
              local.get $var0
              local.get $var3
              i32.add
              local.tee $var5
              i32.const 1
              i32.shr_u
              local.tee $var8
              i32.const 1
              i32.add
              local.get $var0
              local.get $var6
              local.get $var5
              i32.const 2
              i32.shl
              i32.const 4
              i32.or
              i32.add
              i32.load
              local.get $var1
              i32.lt_u
              local.tee $var5
              select
              local.tee $var0
              local.get $var3
              local.get $var8
              local.get $var5
              select
              local.tee $var3
              i32.lt_u
              br_if $label4
            end $label4
          end
          local.get $var0
          local.get $var7
          i32.ge_u
          br_if $label3
          local.get $var6
          local.get $var0
          i32.const 3
          i32.shl
          i32.add
          i32.load
          local.get $var1
          i32.le_u
          local.set $var4
          br $label3
        end $label2
        local.get $var2
        local.get $var1
        i32.const 3
        i32.shr_u
        i32.const 536870908
        i32.and
        i32.add
        i32.load offset=16
        local.get $var1
        i32.shr_u
        i32.const 1
        i32.and
        local.set $var4
      end $label3
      local.get $var4
      local.get $var2
      i32.load8_u offset=12
      i32.const 1
      i32.and
      i32.xor
    end $label1
  )
  (func $func99 (param $var0 i32) (result i32)
    (local $var1 i32)
    (local $var2 i32)
    block $label7 (result i32)
      block $label4
        block $label5
          block $label2
            block $label1
              block $label0
                block $label3
                  local.get $var0
                  i32.load
                  i32.const 4
                  i32.sub
                  br_table $label0 $label1 $label2 $label3 $label3 $label4 $label5 $label4
                end $label3
                loop $label6
                  local.get $var0
                  i32.load offset=12
                  call $func99
                  if
                    i32.const 1
                    local.set $var1
                    br $label4
                  end
                  local.get $var0
                  i32.load offset=16
                  local.tee $var0
                  br_if $label6
                end $label6
                br $label4
              end $label0
              local.get $var0
              i32.load offset=12
              call $func99
              local.set $var1
              br $label4
            end $label1
            local.get $var0
            i32.load offset=16
            i32.eqz
            if
              i32.const 0
              local.get $var0
              i32.load offset=4
              local.tee $var1
              i32.const 8
              i32.and
              br_if $label7
              drop
              local.get $var0
              local.get $var1
              i32.const 8
              i32.or
              i32.store offset=4
              local.get $var0
              i32.load offset=12
              call $func99
              local.set $var1
              local.get $var0
              local.get $var0
              i32.load offset=4
              i32.const -9
              i32.and
              i32.store offset=4
              br $label4
            end
            i32.const 1
            local.set $var1
            local.get $var0
            i32.load offset=12
            call $func99
            br_if $label4
            local.get $var0
            i32.load offset=16
            i32.const 3
            i32.ne
            if
              i32.const 0
              local.set $var1
              br $label4
            end
            local.get $var0
            i32.load offset=20
            local.tee $var2
            if
              local.get $var2
              call $func99
              br_if $label4
            end
            i32.const 0
            local.set $var1
            local.get $var0
            i32.load offset=24
            local.tee $var0
            i32.eqz
            br_if $label4
            local.get $var0
            call $func99
            local.set $var1
            br $label4
          end $label2
          local.get $var0
          i32.load offset=12
          local.tee $var0
          i32.eqz
          br_if $label4
          local.get $var0
          call $func99
          local.set $var1
          br $label4
        end $label5
        i32.const 1
        local.get $var0
        i32.load8_u offset=7
        i32.const 1
        i32.and
        br_if $label7
        drop
      end $label4
      local.get $var1
    end $label7
  )
  (func $func100 (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    local.get $var1
    i32.load offset=8
    local.set $var3
    local.get $var2
    i32.load offset=4
    local.set $var4
    local.get $var1
    i32.load offset=4
    local.tee $var6
    i32.eqz
    if
      local.get $var2
      i32.load offset=8
      local.get $var3
      i32.or
      local.set $var3
    end
    local.get $var1
    local.get $var3
    i64.extend_i32_u
    local.get $var2
    i32.load offset=12
    local.get $var1
    i32.load offset=12
    local.tee $var5
    i32.const 2
    i32.and
    local.get $var5
    local.get $var4
    select
    i32.or
    local.tee $var5
    i64.extend_i32_u
    i64.const 32
    i64.shl
    i64.or
    i64.store offset=8 align=4
    local.get $var2
    i32.load offset=36
    local.set $var4
    block $label0
      local.get $var6
      br_if $label0
      local.get $var4
      i32.const 1
      i32.lt_s
      br_if $label0
      local.get $var2
      i32.const 24
      i32.add
      local.tee $var6
      local.get $var6
      i32.load
      local.get $var3
      i32.or
      i64.extend_i32_u
      local.get $var2
      i32.load offset=28
      local.get $var5
      i32.const 2
      i32.and
      local.get $var5
      local.get $var2
      i32.load offset=4
      select
      i32.or
      i64.extend_i32_u
      i64.const 32
      i64.shl
      i64.or
      i64.store align=4
    end $label0
    block $label1
      local.get $var2
      i32.load offset=176
      i32.const 1
      i32.lt_s
      br_if $label1
      local.get $var1
      i32.load offset=4
      br_if $label1
      local.get $var2
      i32.load offset=164
      br_if $label1
      local.get $var2
      i32.const 168
      i32.add
      local.tee $var3
      local.get $var3
      i32.load
      local.get $var1
      i32.load offset=8
      i32.or
      i32.store
    end $label1
    local.get $var1
    i32.load offset=80
    local.set $var6
    local.get $var1
    i32.load offset=32
    local.set $var3
    local.get $var2
    i32.load offset=4
    if
      local.get $var1
      i32.const 0
      i32.store offset=32
      local.get $var1
      i32.const 0
      i32.store offset=80
    end
    local.get $var2
    i32.const 16
    i32.add
    local.set $var7
    local.get $var1
    i32.const -64
    i32.sub
    local.set $var9
    block $label2
      local.get $var4
      i32.const 1
      i32.lt_s
      br_if $label2
      local.get $var3
      if
        local.get $var2
        i32.const 40
        i32.add
        local.tee $var3
        local.get $var4
        i32.add
        local.set $var5
        local.get $var1
        i32.load offset=36
        local.set $var4
        loop $label5
          local.get $var3
          local.get $var0
          i32.load
          call_indirect (param i32) (result i32)
          local.tee $var8
          local.get $var4
          i32.add
          i32.const 24
          i32.le_s
          if
            block $label3
              local.get $var3
              local.get $var5
              i32.ge_u
              br_if $label3
              i32.const 0
              local.set $var6
              local.get $var8
              i32.const 1
              i32.lt_s
              br_if $label3
              loop $label4
                local.get $var1
                local.get $var4
                i32.add
                local.get $var3
                i32.load8_u
                i32.store8 offset=40
                local.get $var4
                i32.const 1
                i32.add
                local.set $var4
                local.get $var3
                i32.const 1
                i32.add
                local.tee $var3
                local.get $var5
                i32.ge_u
                br_if $label3
                local.get $var6
                i32.const 1
                i32.add
                local.tee $var6
                local.get $var8
                i32.lt_s
                br_if $label4
              end $label4
            end $label3
            local.get $var3
            local.get $var5
            i32.lt_u
            br_if $label5
          end
        end $label5
        local.get $var1
        local.get $var4
        i32.store offset=36
        i32.const 0
        local.set $var4
        local.get $var3
        local.get $var5
        i32.eq
        if
          local.get $var2
          i32.load offset=32
          local.set $var4
        end
        local.get $var1
        local.get $var4
        i32.store offset=32
        local.get $var1
        i32.const 24
        i32.add
        local.tee $var3
        local.get $var3
        i64.load32_u
        local.get $var2
        i32.load offset=28
        local.get $var1
        i32.load offset=28
        i32.const 2
        i32.and
        i32.or
        i32.const 0
        local.get $var4
        select
        i64.extend_i32_u
        i64.const 32
        i64.shl
        i64.or
        i64.store align=4
        local.get $var7
        i32.const 0
        i32.store8 offset=24
        local.get $var7
        i64.const 0
        i64.store offset=16 align=4
        local.get $var7
        i64.const 0
        i64.store offset=8 align=4
        local.get $var7
        i64.const 0
        i64.store align=4
        br $label2
      end
      local.get $var6
      i32.eqz
      br_if $label2
      local.get $var2
      i32.const 40
      i32.add
      local.tee $var3
      local.get $var4
      i32.add
      local.set $var5
      local.get $var1
      i32.load offset=84
      local.set $var4
      loop $label8
        local.get $var3
        local.get $var0
        i32.load
        call_indirect (param i32) (result i32)
        local.tee $var8
        local.get $var4
        i32.add
        i32.const 24
        i32.le_s
        if
          block $label6
            local.get $var3
            local.get $var5
            i32.ge_u
            br_if $label6
            i32.const 0
            local.set $var6
            local.get $var8
            i32.const 1
            i32.lt_s
            br_if $label6
            loop $label7
              local.get $var1
              local.get $var4
              i32.add
              local.get $var3
              i32.load8_u
              i32.store8 offset=88
              local.get $var4
              i32.const 1
              i32.add
              local.set $var4
              local.get $var3
              i32.const 1
              i32.add
              local.tee $var3
              local.get $var5
              i32.ge_u
              br_if $label6
              local.get $var6
              i32.const 1
              i32.add
              local.tee $var6
              local.get $var8
              i32.lt_s
              br_if $label7
            end $label7
          end $label6
          local.get $var3
          local.get $var5
          i32.lt_u
          br_if $label8
        end
      end $label8
      local.get $var1
      local.get $var4
      i32.store offset=84
      i32.const 0
      local.set $var4
      local.get $var3
      local.get $var5
      i32.eq
      if
        local.get $var2
        i32.load offset=32
        local.set $var4
      end
      local.get $var1
      local.get $var4
      i32.store offset=80
      local.get $var1
      i32.const 72
      i32.add
      local.tee $var3
      local.get $var3
      i64.load32_u
      local.get $var2
      i32.load offset=28
      local.get $var1
      i32.load offset=76
      i32.const 2
      i32.and
      i32.or
      i32.const 0
      local.get $var4
      select
      i64.extend_i32_u
      i64.const 32
      i64.shl
      i64.or
      i64.store align=4
      local.get $var7
      i32.const 0
      i32.store8 offset=24
      local.get $var7
      i64.const 0
      i64.store offset=16 align=4
      local.get $var7
      i64.const 0
      i64.store offset=8 align=4
      local.get $var7
      i64.const 0
      i64.store align=4
    end $label2
    local.get $var0
    local.get $var9
    local.get $var7
    call $func80
    local.get $var0
    local.get $var9
    local.get $var2
    i32.const -64
    i32.sub
    call $func80
    local.get $var1
    i32.const 112
    i32.add
    local.set $var3
    block $label9
      local.get $var1
      i32.load offset=132
      i32.const 1
      i32.ge_s
      if
        local.get $var2
        i32.load offset=4
        i32.eqz
        br_if $label9
        local.get $var1
        i32.load offset=116
        i32.eqz
        if
          local.get $var0
          local.get $var1
          i32.const 16
          i32.add
          local.get $var3
          call $func80
          br $label9
        end
        local.get $var0
        local.get $var9
        local.get $var3
        call $func80
        br $label9
      end
      local.get $var2
      i32.load offset=132
      i32.const 1
      i32.lt_s
      br_if $label9
      local.get $var3
      local.get $var2
      i64.load offset=112 align=4
      i64.store align=4
      local.get $var3
      local.get $var2
      i64.load offset=152 align=4
      i64.store offset=40 align=4
      local.get $var3
      local.get $var2
      i64.load offset=144 align=4
      i64.store offset=32 align=4
      local.get $var3
      local.get $var2
      i64.load offset=136 align=4
      i64.store offset=24 align=4
      local.get $var3
      local.get $var2
      i64.load offset=128 align=4
      i64.store offset=16 align=4
      local.get $var3
      local.get $var2
      i64.load offset=120 align=4
      i64.store offset=8 align=4
    end $label9
    block $label10
      local.get $var2
      i32.load offset=176
      local.tee $var3
      i32.eqz
      br_if $label10
      local.get $var1
      i32.const 160
      i32.add
      local.set $var4
      local.get $var2
      i32.const 160
      i32.add
      local.set $var6
      local.get $var1
      i32.load offset=176
      local.tee $var5
      i32.eqz
      if
        local.get $var4
        local.get $var6
        i32.const 276
        call $func230
        drop
        br $label10
      end
      i32.const 32768
      local.get $var5
      i32.div_s
      local.set $var5
      i32.const 32768
      local.get $var3
      i32.div_s
      local.tee $var3
      i32.const 1
      i32.lt_s
      br_if $label10
      block $label11
        local.get $var5
        i32.const 1
        i32.lt_s
        br_if $label11
        i32.const 0
        local.set $var8
        block $label12 (result i32)
          i32.const 0
          local.get $var1
          i32.load offset=164
          local.tee $var7
          i32.const -1
          i32.eq
          br_if $label12
          drop
          i32.const 1
          local.get $var7
          local.get $var4
          i32.load
          i32.sub
          local.tee $var7
          i32.const 99
          i32.gt_u
          br_if $label12
          drop
          local.get $var7
          i32.const 1
          i32.shl
          i32.const 3360
          i32.add
          i32.load16_s
        end $label12
        local.get $var5
        i32.mul
        local.set $var5
        block $label13
          local.get $var2
          i32.load offset=164
          local.tee $var0
          i32.const -1
          i32.eq
          br_if $label13
          i32.const 1
          local.set $var8
          local.get $var0
          local.get $var6
          i32.load
          i32.sub
          local.tee $var0
          i32.const 99
          i32.gt_u
          br_if $label13
          local.get $var0
          i32.const 1
          i32.shl
          i32.const 3360
          i32.add
          i32.load16_s
          local.set $var8
        end $label13
        local.get $var3
        local.get $var8
        i32.mul
        local.tee $var3
        local.get $var5
        i32.gt_s
        br_if $label11
        local.get $var3
        local.get $var5
        i32.lt_s
        br_if $label10
        local.get $var6
        i32.load
        local.get $var4
        i32.load
        i32.ge_u
        br_if $label10
      end $label11
      local.get $var4
      local.get $var6
      i32.const 276
      call $func230
      drop
    end $label10
    local.get $var1
    i32.const -1
    i32.const -1
    i32.const -1
    local.get $var2
    i32.load
    local.tee $var3
    local.get $var1
    i32.load
    local.tee $var4
    i32.add
    local.get $var3
    i32.const -1
    i32.eq
    select
    local.get $var4
    i32.const -1
    i32.eq
    select
    local.get $var4
    local.get $var3
    i32.const -1
    i32.xor
    i32.gt_u
    select
    i32.store
    local.get $var1
    i32.const -1
    i32.const -1
    i32.const -1
    local.get $var2
    i32.load offset=4
    local.tee $var3
    local.get $var1
    i32.load offset=4
    local.tee $var4
    i32.add
    local.get $var3
    i32.const -1
    i32.eq
    select
    local.get $var4
    i32.const -1
    i32.eq
    select
    local.get $var4
    local.get $var3
    i32.const -1
    i32.xor
    i32.gt_u
    select
    i32.store offset=4
  )
  (func $func101 (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    local.get $var0
    local.get $var0
    i32.load offset=8
    local.get $var1
    i32.load offset=8
    i32.and
    i32.store offset=8
    local.get $var0
    i32.const 12
    i32.add
    local.tee $var3
    local.get $var3
    i32.load
    local.get $var1
    i32.load offset=12
    i32.and
    i32.store
    local.get $var0
    i32.const 16
    i32.add
    local.get $var1
    i32.const 16
    i32.add
    local.get $var2
    call $func103
    local.get $var0
    i32.const -64
    i32.sub
    local.get $var1
    i32.const -64
    i32.sub
    local.get $var2
    call $func103
    local.get $var0
    i32.const 112
    i32.add
    local.get $var1
    i32.const 112
    i32.add
    local.get $var2
    call $func103
    block $label0
      local.get $var0
      i32.load offset=176
      i32.eqz
      br_if $label0
      local.get $var0
      i32.const 160
      i32.add
      local.set $var3
      block $label1
        local.get $var1
        i32.load offset=176
        if
          local.get $var0
          i32.load offset=164
          local.tee $var5
          local.get $var1
          i32.load offset=160
          local.tee $var4
          i32.ge_u
          br_if $label1
        end
        local.get $var3
        i32.const 0
        i32.const 276
        call $func231
        drop
        br $label0
      end $label1
      local.get $var2
      i32.load offset=8
      local.set $var2
      local.get $var4
      local.get $var3
      i32.load
      i32.lt_u
      if
        local.get $var3
        local.get $var4
        i32.store
      end
      local.get $var1
      i32.load offset=164
      local.tee $var3
      local.get $var5
      i32.gt_u
      if
        local.get $var0
        local.get $var3
        i32.store offset=164
      end
      block $label3 (result i32)
        block $label2
          local.get $var1
          i32.load8_u offset=180
          if
            local.get $var0
            i32.const 1
            i32.store8 offset=180
            br $label2
          end
          local.get $var0
          i32.load8_u offset=180
          br_if $label2
          i32.const 0
          br $label3
        end $label2
        i32.const 20
        i32.const 5
        local.get $var2
        i32.load offset=12
        i32.const 1
        i32.gt_s
        select
      end $label3
      local.set $var4
      i32.const 1
      local.set $var2
      loop $label6
        local.get $var0
        local.get $var2
        i32.add
        i32.const 180
        i32.add
        local.set $var3
        block $label5
          block $label4
            local.get $var1
            local.get $var2
            i32.add
            i32.load8_u offset=180
            if
              local.get $var3
              i32.const 1
              i32.store8
              br $label4
            end
            local.get $var3
            i32.load8_u
            i32.eqz
            br_if $label5
          end $label4
          i32.const 4
          local.set $var3
          local.get $var2
          i32.const 127
          i32.le_u
          if (result i32)
            local.get $var2
            i32.const 1
            i32.shl
            i32.const 3568
            i32.add
            i32.load16_s
          else
            local.get $var3
          end
          local.get $var4
          i32.add
          local.set $var4
        end $label5
        local.get $var2
        i32.const 1
        i32.add
        local.tee $var2
        i32.const 256
        i32.ne
        br_if $label6
      end $label6
      local.get $var0
      local.get $var4
      i32.store offset=176
      local.get $var0
      i32.const 168
      i32.add
      local.tee $var2
      local.get $var2
      i32.load
      local.get $var1
      i32.load offset=168
      i32.and
      i32.store
      local.get $var0
      i32.const 172
      i32.add
      local.tee $var2
      local.get $var2
      i32.load
      local.get $var1
      i32.load offset=172
      i32.and
      i32.store
    end $label0
    local.get $var1
    i32.load
    local.tee $var2
    local.get $var0
    i32.load
    i32.lt_u
    if
      local.get $var0
      local.get $var2
      i32.store
    end
    local.get $var1
    i32.load offset=4
    local.tee $var2
    local.get $var0
    i32.load offset=4
    i32.gt_u
    if
      local.get $var0
      local.get $var2
      i32.store offset=4
    end
  )
  (func $func102 (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    loop $label18
      i32.const 0
      local.set $var2
      block $label12
        block $label5
          block $label13
            block $label4
              block $label3
                block $label8
                  block $label2
                    block $label1
                      block $label0
                        block $label7
                          block $label6
                            local.get $var0
                            i32.load
                            br_table $label0 $label1 $label1 $label2 $label3 $label4 $label5 $label6 $label7 $label8 $label5
                          end $label6
                          loop $label9
                            i32.const -1
                            i32.const -1
                            i32.const -1
                            local.get $var0
                            i32.load offset=12
                            local.get $var1
                            call $func102
                            local.tee $var3
                            local.get $var2
                            i32.add
                            local.get $var3
                            i32.const -1
                            i32.eq
                            select
                            local.get $var2
                            i32.const -1
                            i32.eq
                            select
                            local.get $var2
                            local.get $var3
                            i32.const -1
                            i32.xor
                            i32.gt_u
                            select
                            local.tee $var2
                            local.set $var3
                            local.get $var0
                            i32.load offset=16
                            local.tee $var0
                            br_if $label9
                          end $label9
                          br $label5
                        end $label7
                        loop $label10
                          local.get $var0
                          i32.load offset=12
                          local.get $var1
                          call $func102
                          local.tee $var3
                          local.get $var2
                          local.get $var2
                          local.get $var3
                          i32.lt_u
                          select
                          local.tee $var2
                          local.set $var3
                          local.get $var0
                          i32.load offset=16
                          local.tee $var0
                          br_if $label10
                        end $label10
                        br $label5
                      end $label0
                      local.get $var0
                      i32.load offset=16
                      local.get $var0
                      i32.load offset=12
                      i32.sub
                      return
                    end $label1
                    local.get $var1
                    i32.load offset=8
                    i32.load offset=8
                    return
                  end $label2
                  local.get $var0
                  i32.load offset=4
                  local.tee $var2
                  i32.const 131072
                  i32.and
                  br_if $label5
                  local.get $var2
                  i32.const 64
                  i32.and
                  if
                    local.get $var2
                    i32.const 18
                    i32.shl
                    i32.const 31
                    i32.shr_s
                    return
                  end
                  local.get $var0
                  i32.load offset=12
                  i32.const 1
                  i32.lt_s
                  br_if $label5
                  local.get $var1
                  i32.load offset=128
                  local.tee $var2
                  local.get $var1
                  i32.const -64
                  i32.sub
                  local.get $var2
                  select
                  local.set $var4
                  local.get $var0
                  i32.load offset=40
                  local.tee $var2
                  local.get $var0
                  i32.const 16
                  i32.add
                  local.get $var2
                  select
                  local.set $var5
                  i32.const 0
                  local.set $var2
                  loop $label11
                    local.get $var4
                    local.get $var5
                    local.get $var2
                    i32.const 2
                    i32.shl
                    i32.add
                    i32.load
                    i32.const 3
                    i32.shl
                    i32.add
                    i32.load
                    local.get $var1
                    call $func102
                    local.tee $var6
                    local.get $var3
                    local.get $var3
                    local.get $var6
                    i32.lt_u
                    select
                    local.set $var3
                    local.get $var2
                    i32.const 1
                    i32.add
                    local.tee $var2
                    local.get $var0
                    i32.load offset=12
                    i32.lt_s
                    br_if $label11
                  end $label11
                  br $label5
                end $label8
                local.get $var0
                i32.load8_u offset=4
                i32.const 64
                i32.and
                i32.eqz
                br_if $label12
                i32.const -1
                return
              end $label3
              local.get $var0
              i32.load offset=20
              i32.eqz
              br_if $label13
              local.get $var0
              i32.load offset=12
              local.get $var1
              call $func102
              local.tee $var2
              i32.eqz
              br_if $label13
              block $label14
                local.get $var0
                i32.load offset=20
                local.tee $var3
                i32.const 1
                i32.add
                br_table $label5 $label13 $label14
              end $label14
              local.get $var2
              local.get $var3
              i32.mul
              i32.const -1
              i32.const -1
              local.get $var3
              i32.div_u
              local.get $var2
              i32.gt_u
              select
              return
            end $label4
            local.get $var0
            i32.load offset=16
            local.tee $var2
            i32.const 1
            i32.sub
            i32.const 2
            i32.lt_u
            br_if $label12
            block $label16
              block $label15
                local.get $var2
                br_table $label15 $label5 $label5 $label16 $label5
              end $label15
              local.get $var0
              i32.load offset=4
              local.tee $var2
              i32.const 2
              i32.and
              if
                local.get $var0
                i32.load offset=40
                return
              end
              i32.const -1
              local.set $var3
              local.get $var2
              i32.const 8
              i32.and
              br_if $label5
              local.get $var0
              local.get $var2
              i32.const 8
              i32.or
              i32.store offset=4
              local.get $var0
              local.get $var0
              i32.load offset=12
              local.get $var1
              call $func102
              local.tee $var2
              i32.store offset=40
              local.get $var0
              local.get $var0
              i32.load offset=4
              i32.const -11
              i32.and
              i32.const 2
              i32.or
              i32.store offset=4
              local.get $var2
              return
            end $label16
            local.get $var0
            i32.load offset=12
            local.get $var1
            call $func102
            local.set $var2
            local.get $var0
            i32.load offset=20
            local.tee $var3
            if
              i32.const -1
              i32.const -1
              i32.const -1
              local.get $var3
              local.get $var1
              call $func102
              local.tee $var3
              local.get $var2
              i32.add
              local.get $var3
              i32.const -1
              i32.eq
              select
              local.get $var2
              i32.const -1
              i32.eq
              select
              local.get $var2
              local.get $var3
              i32.const -1
              i32.xor
              i32.gt_u
              select
              local.set $var2
            end
            block $label17 (result i32)
              i32.const 0
              local.get $var0
              i32.load offset=24
              local.tee $var0
              i32.eqz
              br_if $label17
              drop
              local.get $var0
              local.get $var1
              call $func102
            end $label17
            local.tee $var0
            local.get $var2
            local.get $var0
            local.get $var2
            i32.gt_u
            select
            return
          end $label13
          i32.const 0
          local.set $var3
        end $label5
        local.get $var3
        return
      end $label12
      local.get $var0
      i32.load offset=12
      local.set $var0
      br $label18
    end $label18
    unreachable
  )
  (func $func103 (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    (local $var5 i32)
    (local $var6 i32)
    block $label0
      local.get $var1
      i32.load offset=20
      local.tee $var4
      i32.eqz
      br_if $label0
      local.get $var0
      i32.load offset=20
      local.tee $var5
      i32.eqz
      br_if $label0
      local.get $var0
      i32.load
      local.get $var1
      i32.load
      i32.ne
      br_if $label0
      local.get $var0
      i32.load offset=4
      local.get $var1
      i32.load offset=4
      i32.ne
      br_if $label0
      block $label1
        local.get $var5
        i32.const 1
        i32.lt_s
        br_if $label1
        local.get $var4
        i32.const 1
        i32.lt_s
        br_if $label1
        loop $label3
          local.get $var0
          local.get $var3
          i32.add
          i32.const 24
          i32.add
          local.tee $var5
          i32.load8_u
          local.get $var1
          local.get $var3
          i32.add
          i32.load8_u offset=24
          i32.ne
          br_if $label1
          i32.const 1
          local.set $var4
          local.get $var5
          local.get $var2
          i32.load offset=8
          i32.load
          call_indirect (param i32) (result i32)
          local.tee $var6
          i32.const 1
          i32.gt_s
          if
            loop $label2
              local.get $var0
              local.get $var3
              local.get $var4
              i32.add
              local.tee $var5
              i32.add
              i32.load8_u offset=24
              local.get $var1
              local.get $var5
              i32.add
              i32.load8_u offset=24
              i32.ne
              br_if $label1
              local.get $var4
              i32.const 1
              i32.add
              local.tee $var4
              local.get $var6
              i32.ne
              br_if $label2
            end $label2
          end
          local.get $var3
          local.get $var6
          i32.add
          local.tee $var3
          local.get $var0
          i32.load offset=20
          i32.ge_s
          br_if $label1
          local.get $var3
          local.get $var1
          i32.load offset=20
          i32.lt_s
          br_if $label3
        end $label3
      end $label1
      block $label5 (result i32)
        block $label4
          local.get $var1
          i32.load offset=16
          i32.eqz
          br_if $label4
          local.get $var3
          local.get $var1
          i32.load offset=20
          i32.lt_s
          br_if $label4
          local.get $var3
          local.get $var0
          i32.load offset=20
          i32.lt_s
          br_if $label4
          local.get $var0
          i32.load offset=16
          i32.eqz
          br $label5
        end $label4
        local.get $var0
        i32.const 0
        i32.store offset=16
        i32.const 1
      end $label5
      local.set $var4
      local.get $var0
      local.get $var3
      i32.store offset=20
      local.get $var0
      local.get $var0
      i32.load offset=8
      local.get $var1
      i32.load offset=8
      i32.and
      i32.store offset=8
      local.get $var0
      i32.const 12
      i32.add
      local.tee $var0
      i32.const 0
      local.get $var0
      i32.load
      local.get $var1
      i32.load offset=12
      i32.and
      local.get $var4
      select
      i32.store
      return
    end $label0
    local.get $var0
    i64.const 0
    i64.store align=4
    local.get $var0
    i32.const 0
    i32.store8 offset=24
    local.get $var0
    i64.const 0
    i64.store offset=16 align=4
    local.get $var0
    i64.const 0
    i64.store offset=8 align=4
  )
  (func $func104 (param $var0 i32)
    (local $var1 i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    local.get $var0
    if
      local.get $var0
      i32.load offset=16
      local.tee $var2
      i32.const 1
      i32.ge_s
      if
        loop $label0
          local.get $var0
          i32.load offset=20
          local.get $var1
          i32.const 2
          i32.shl
          i32.add
          i32.load
          local.tee $var3
          if
            local.get $var3
            call $func104
            local.get $var0
            i32.load offset=16
            local.set $var2
          end
          local.get $var1
          i32.const 1
          i32.add
          local.tee $var1
          local.get $var2
          i32.lt_s
          br_if $label0
        end $label0
      end
      block $label1
        local.get $var0
        i32.load offset=12
        local.tee $var2
        i32.const 1
        i32.lt_s
        br_if $label1
        local.get $var2
        i32.const 3
        i32.and
        local.set $var3
        i32.const 0
        local.set $var1
        local.get $var2
        i32.const 1
        i32.sub
        i32.const 3
        i32.ge_u
        if
          local.get $var2
          i32.const -4
          i32.and
          local.set $var4
          loop $label2
            local.get $var1
            i32.const 2
            i32.shl
            local.tee $var2
            local.get $var0
            i32.load offset=20
            i32.add
            i32.const 0
            i32.store
            local.get $var0
            i32.load offset=20
            local.get $var2
            i32.const 4
            i32.or
            i32.add
            i32.const 0
            i32.store
            local.get $var0
            i32.load offset=20
            local.get $var2
            i32.const 8
            i32.or
            i32.add
            i32.const 0
            i32.store
            local.get $var0
            i32.load offset=20
            local.get $var2
            i32.const 12
            i32.or
            i32.add
            i32.const 0
            i32.store
            local.get $var1
            i32.const 4
            i32.add
            local.set $var1
            local.get $var4
            i32.const 4
            i32.sub
            local.tee $var4
            br_if $label2
          end $label2
        end
        local.get $var3
        i32.eqz
        br_if $label1
        loop $label3
          local.get $var0
          i32.load offset=20
          local.get $var1
          i32.const 2
          i32.shl
          i32.add
          i32.const 0
          i32.store
          local.get $var1
          i32.const 1
          i32.add
          local.set $var1
          local.get $var3
          i32.const 1
          i32.sub
          local.tee $var3
          br_if $label3
        end $label3
      end $label1
      local.get $var0
      i32.const -1
      i32.store offset=8
      local.get $var0
      i32.const 0
      i32.store offset=16
      local.get $var0
      i64.const -1
      i64.store align=4
    end
    local.get $var0
    i32.load offset=20
    local.tee $var1
    if
      local.get $var1
      call $func224
    end
    local.get $var0
    call $func224
  )
  (func $func105 (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    local.get $var0
    local.get $var1
    i32.store offset=4
    local.get $var1
    i32.const 10
    local.get $var1
    i32.const 10
    i32.gt_s
    select
    local.set $var1
    block $label0
      block $label1
        local.get $var0
        i32.load
        local.tee $var3
        i32.eqz
        if
          local.get $var0
          local.get $var1
          i32.const 2
          i32.shl
          local.tee $var2
          call $func223
          local.tee $var3
          i32.store offset=8
          local.get $var0
          local.get $var2
          call $func223
          local.tee $var4
          i32.store offset=12
          i32.const -5
          local.set $var2
          local.get $var3
          i32.eqz
          br_if $label0
          local.get $var4
          br_if $label1
          br $label0
        end
        local.get $var1
        local.get $var3
        i32.le_s
        br_if $label0
        local.get $var0
        local.get $var0
        i32.load offset=8
        local.get $var1
        i32.const 2
        i32.shl
        local.tee $var2
        call $func226
        i32.store offset=8
        local.get $var0
        local.get $var0
        i32.load offset=12
        local.get $var2
        call $func226
        local.tee $var3
        i32.store offset=12
        i32.const -5
        local.set $var2
        local.get $var3
        i32.eqz
        br_if $label0
        local.get $var0
        i32.load offset=8
        i32.eqz
        br_if $label0
      end $label1
      local.get $var0
      local.get $var1
      i32.store
      i32.const 0
      local.set $var2
    end $label0
    local.get $var2
  )
  (func $func106 (result i32)
    (local $var0 i32)
    i32.const 20
    call $func223
    local.tee $var0
    i32.eqz
    if
      i32.const 0
      return
    end
    local.get $var0
    i64.const 0
    i64.store align=4
    local.get $var0
    i32.const 0
    i32.store offset=16
    local.get $var0
    i64.const 0
    i64.store offset=8 align=4
    local.get $var0
  )
  (func $func107 (param $var0 i32)
    (local $var1 i32)
    local.get $var0
    if
      local.get $var0
      i32.load
      i32.const 1
      i32.ge_s
      if
        local.get $var0
        i32.load offset=8
        local.tee $var1
        if
          local.get $var1
          call $func224
        end
        local.get $var0
        i32.load offset=12
        local.tee $var1
        if
          local.get $var1
          call $func224
        end
        local.get $var0
        i32.const 0
        i32.store
      end
      local.get $var0
      i32.load offset=16
      local.tee $var1
      if
        local.get $var1
        call $func104
        local.get $var0
        i32.const 0
        i32.store offset=16
      end
      local.get $var0
      call $func224
    end
  )
  (func $func108 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (param $var5 i32) (param $var6 i32) (param $var7 i32) (result i32)
    (local $var8 i32)
    (local $var9 i32)
    (local $var10 i32)
    (local $var11 i32)
    (local $var12 i32)
    (local $var13 i32)
    (local $var14 i32)
    (local $var15 i32)
    (local $var16 i32)
    (local $var17 i32)
    (local $var18 i32)
    global.get $global0
    i32.const 16
    i32.sub
    local.tee $var15
    global.set $global0
    block $label0
      local.get $var0
      i32.load offset=4
      local.tee $var9
      i32.eqz
      if
        i32.const -1
        local.set $var8
        br $label0
      end
      i32.const -30
      local.set $var8
      local.get $var5
      i32.const 2048
      i32.and
      br_if $label0
      local.get $var0
      i32.load offset=12
      local.set $var17
      local.get $var9
      i32.const 1
      i32.ge_s
      if
        loop $label6
          local.get $var0
          i32.load
          local.get $var11
          i32.const 3
          i32.shl
          i32.add
          local.tee $var8
          i32.load offset=4
          local.set $var10
          local.get $var8
          i32.load
          local.tee $var13
          i32.load offset=392
          local.set $var8
          local.get $var6
          local.get $var11
          i32.const 2
          i32.shl
          i32.add
          i32.load
          local.tee $var9
          i32.const 0
          i32.store offset=20
          block $label1
            local.get $var8
            i32.eqz
            br_if $label1
            local.get $var8
            i32.load offset=12
            local.tee $var12
            i32.eqz
            br_if $label1
            block $label2
              local.get $var9
              i32.load offset=32
              local.tee $var14
              local.get $var12
              i32.ge_s
              if
                local.get $var9
                i32.load offset=28
                local.set $var12
                br $label2
              end
              local.get $var12
              i32.const 6
              i32.shl
              local.set $var12
              block $label3 (result i32)
                local.get $var9
                i32.load offset=28
                local.tee $var14
                if
                  local.get $var14
                  local.get $var12
                  call $func226
                  br $label3
                end
                local.get $var12
                call $func223
              end $label3
              local.tee $var12
              i32.eqz
              if
                i32.const -5
                local.set $var8
                br $label0
              end
              local.get $var9
              local.get $var12
              i32.store offset=28
              local.get $var9
              local.get $var8
              i32.load offset=12
              local.tee $var14
              i32.store offset=32
            end $label2
            local.get $var12
            i32.const 0
            local.get $var14
            i32.const 6
            i32.shl
            call $func231
            drop
          end $label1
          block $label4
            local.get $var10
            i32.eqz
            br_if $label4
            local.get $var10
            local.get $var13
            i32.load offset=28
            i32.const 1
            i32.add
            call $func105
            local.tee $var8
            br_if $label0
            local.get $var10
            i32.load offset=4
            i32.const 1
            i32.ge_s
            if
              local.get $var10
              i32.load offset=8
              local.set $var13
              local.get $var10
              i32.load offset=12
              local.set $var12
              i32.const 0
              local.set $var8
              loop $label5
                local.get $var12
                local.get $var8
                i32.const 2
                i32.shl
                local.tee $var9
                i32.add
                i32.const -1
                i32.store
                local.get $var9
                local.get $var13
                i32.add
                i32.const -1
                i32.store
                local.get $var8
                i32.const 1
                i32.add
                local.tee $var8
                local.get $var10
                i32.load offset=4
                i32.lt_s
                br_if $label5
              end $label5
            end
            local.get $var10
            i32.load offset=16
            local.tee $var8
            i32.eqz
            br_if $label4
            local.get $var8
            call $func104
            local.get $var10
            i32.const 0
            i32.store offset=16
          end $label4
          local.get $var11
          i32.const 1
          i32.add
          local.tee $var11
          local.get $var0
          i32.load offset=4
          i32.lt_s
          br_if $label6
        end $label6
      end
      local.get $var2
      local.get $var3
      i32.lt_u
      if
        i32.const -1
        local.set $var8
        br $label0
      end
      local.get $var1
      local.get $var3
      i32.gt_u
      if
        i32.const -1
        local.set $var8
        br $label0
      end
      local.get $var1
      local.get $var2
      i32.ge_u
      local.tee $var9
      i32.eqz
      if
        i32.const -30
        local.set $var8
        local.get $var3
        local.get $var4
        i32.gt_u
        br_if $label0
      end
      block $label7
        local.get $var5
        i32.const 4096
        i32.and
        i32.eqz
        br_if $label7
        local.get $var1
        local.get $var2
        local.get $var17
        i32.load offset=72
        call_indirect (param i32 i32) (result i32)
        br_if $label7
        i32.const -400
        local.set $var8
        br $label0
      end $label7
      block $label45
        block $label19
          block $label13
            block $label12
              block $label16 (result i32)
                block $label9
                  block $label11
                    block $label15
                      block $label10
                        block $label8
                          local.get $var9
                          br_if $label8
                          local.get $var0
                          i32.load offset=16
                          local.tee $var8
                          i32.eqz
                          br_if $label8
                          local.get $var8
                          i32.const 64
                          i32.and
                          br_if $label9
                          local.get $var8
                          i32.const 16
                          i32.and
                          if
                            local.get $var1
                            local.get $var3
                            i32.eq
                            br_if $label10
                            i32.const -1
                            local.set $var8
                            br $label0
                          end
                          local.get $var2
                          local.set $var9
                          local.get $var8
                          i32.const 128
                          i32.and
                          br_if $label11
                          local.get $var8
                          i32.const 256
                          i32.and
                          if
                            local.get $var17
                            local.get $var1
                            local.get $var2
                            i32.const 1
                            call $func133
                            local.tee $var8
                            local.get $var9
                            local.get $var17
                            i32.load offset=16
                            call_indirect (param i32 i32) (result i32)
                            i32.eqz
                            br_if $label11
                            local.get $var4
                            local.set $var16
                            local.get $var3
                            local.set $var10
                            local.get $var1
                            local.get $var8
                            i32.ge_u
                            br_if $label12
                            local.get $var8
                            local.set $var9
                            local.get $var3
                            local.get $var8
                            i32.le_u
                            br_if $label11
                            br $label12
                          end
                          local.get $var4
                          local.set $var16
                          local.get $var3
                          local.set $var10
                          local.get $var8
                          i32.const 32768
                          i32.and
                          br_if $label9
                          br $label12
                        end $label8
                        local.get $var4
                        local.set $var16
                        local.get $var3
                        local.set $var10
                        local.get $var1
                        local.get $var2
                        i32.ne
                        br_if $label12
                        local.get $var0
                        i32.load offset=4
                        local.tee $var11
                        i32.const 56
                        i32.mul
                        call $func223
                        local.tee $var14
                        i32.eqz
                        if
                          i32.const -5
                          local.set $var8
                          br $label0
                        end
                        local.get $var11
                        i32.const 1
                        i32.lt_s
                        if
                          i32.const -1
                          local.set $var8
                          br $label13
                        end
                        local.get $var0
                        i32.load
                        local.set $var1
                        i32.const 0
                        local.set $var9
                        loop $label14
                          local.get $var1
                          local.get $var9
                          i32.const 3
                          i32.shl
                          i32.add
                          local.tee $var10
                          i32.load
                          local.set $var13
                          local.get $var14
                          local.get $var9
                          i32.const 56
                          i32.mul
                          i32.add
                          local.tee $var8
                          local.get $var5
                          i32.store offset=8
                          local.get $var8
                          i32.const 0
                          i32.store
                          local.get $var10
                          i32.load offset=4
                          local.set $var10
                          local.get $var8
                          local.get $var2
                          i32.store offset=20
                          local.get $var8
                          local.get $var10
                          i32.store offset=12
                          local.get $var8
                          local.get $var6
                          local.get $var9
                          i32.const 2
                          i32.shl
                          i32.add
                          i32.load
                          local.tee $var10
                          i32.load
                          i32.store offset=24
                          local.get $var8
                          local.get $var10
                          i32.load offset=4
                          i32.store offset=28
                          local.get $var10
                          i32.load offset=8
                          local.set $var12
                          local.get $var8
                          i32.const 0
                          i32.store offset=52
                          local.get $var8
                          i32.const 0
                          i32.store offset=36
                          local.get $var8
                          local.get $var12
                          i32.store offset=32
                          local.get $var8
                          i32.const -1
                          i32.store offset=44
                          local.get $var8
                          local.get $var10
                          i32.store offset=40
                          local.get $var8
                          local.get $var13
                          i32.load offset=28
                          i32.const 1
                          i32.shl
                          i32.const 2
                          i32.add
                          i32.store offset=16
                          local.get $var9
                          i32.const 1
                          i32.add
                          local.tee $var9
                          local.get $var11
                          i32.ne
                          br_if $label14
                        end $label14
                        br $label15
                      end $label10
                      local.get $var3
                      i32.const 1
                      i32.add
                      br $label16
                    end $label15
                    local.get $var11
                    i32.const 1
                    i32.lt_s
                    if
                      i32.const -1
                      local.set $var8
                      br $label13
                    end
                    i32.const 0
                    local.set $var9
                    block $label17
                      loop $label18
                        local.get $var0
                        i32.load
                        local.get $var9
                        i32.const 3
                        i32.shl
                        i32.add
                        i32.load
                        local.tee $var8
                        i32.load offset=96
                        i32.eqz
                        if
                          local.get $var8
                          local.get $var2
                          local.get $var2
                          local.get $var2
                          local.get $var2
                          local.get $var14
                          local.get $var9
                          i32.const 56
                          i32.mul
                          i32.add
                          call $func109
                          local.tee $var8
                          i32.const -1
                          i32.ne
                          br_if $label17
                          local.get $var0
                          i32.load offset=4
                          local.set $var11
                        end
                        local.get $var9
                        i32.const 1
                        i32.add
                        local.tee $var9
                        local.get $var11
                        i32.lt_s
