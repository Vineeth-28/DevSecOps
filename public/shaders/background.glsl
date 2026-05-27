#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(0.0);

    color.r = 0.2 + 0.2*sin(u_time);
    color.g = 0.4 + 0.3*sin(u_time * 0.5);
    color.b = 0.8;

    gl_FragColor = vec4(color,1.0);
}