---
title: Test Post
description: Test
date: 2024-10-19T14:28:13
tags: another tag
---

# Test

<canvas> </canvas>

<script type="module">

fetch("./resume.svg")
    .then(x => x.text())
    .then(text => {
        const canvas = document.getElementsByTagName("canvas")[0];
        const ctx = canvas.getContext("2d");

        let p = new Path2D(text);
        ctx.fill(p);
        }
    )

</script>
