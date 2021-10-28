sudo docker run -ti \
  --volumes-from mosquitto \
  --name mqtt \
  -p 1883:1883 \
  -p 9883:9883 \
  dendebaiano/suricato-mqtt:v1.0.0