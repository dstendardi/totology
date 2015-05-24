# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
curl -sSL https://get.docker.com/ubuntu/ | sh
gpasswd -a vagrant docker
service docker restart
apt-get -y install python-pip cachefilesd
echo "RUN=yes" > /etc/default/cachefilesd
pip install docker-compose
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "192.168.50.4"
  config.vm.synced_folder ".", "/vagrant", :type => "nfs", mount_options: ["nolock", "vers=3", "udp", "noatime", "actimeo=1", "fsc"]
  config.vm.provision "shell", inline: $script
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.customize [ "guestproperty", "set", :id, "--timesync-threshold", 10000 ]
  end
end
