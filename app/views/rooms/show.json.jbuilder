if @new_messages.present? # @new_messageに中身があれば
  json.array! @new_messages
else
  puts "何もない"
end