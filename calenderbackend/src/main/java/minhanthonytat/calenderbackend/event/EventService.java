package minhanthonytat.calenderbackend.event;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import minhanthonytat.calenderbackend.label.Label;
import minhanthonytat.calenderbackend.label.LabelService;

@Service
@Transactional
public class EventService {
  
  @Autowired
  private EventRepository eventRepository;

  @Autowired
  private LabelService labelService;

  public List<Event> findAll(){
    return this.eventRepository.findAll();
  }

  public Optional<Event> findById(Long id){
    Optional<Event> foundEvent = this.eventRepository.findById(id);
    return foundEvent;
  }

  public boolean deleteById(Long id){
    Optional<Event> foundEvent = this.eventRepository.findById(id);
    if(foundEvent.isPresent()){
      this.eventRepository.delete(foundEvent.get());
      return true;
    }
    return false;
  }

  public Event create(EventCreateDTO data){

    String name = data.getName();
    Date startDate = data.getStartDate();
    Date endDate = data.getEndDate();
    String location = data.getLocation();
    Long labelId = data.getLabelId();

    Optional<Label> foundLabel = this.labelService.findById(labelId);
    
    if(foundLabel.isPresent()){
      Label label = foundLabel.get();
      Event newEvent = new Event(name,startDate,endDate,location,label);
      Event created = this.eventRepository.save(newEvent);
      return created;
    }
    
    return new Event();
  }


  public Optional<Event> updateById(Long id, EventUpdateDTO data){
    Optional<Event> foundEvent = this.findById(id);

    if(foundEvent.isPresent()){
      Event toUpdate = foundEvent.get();

      if(data.getName() != null){
        toUpdate.setName(data.getName());
      }

      if(data.getStartDate() != null){
        toUpdate.setStartDate(data.getStartDate());
      }

      if(data.getEndDate() != null){
        toUpdate.setEndDate(data.getEndDate());
      }

      if(data.getLocation() != null){
        toUpdate.setLocation(data.getLocation());
      }

      if(data.getLabelId() != null){
        Optional<Label> foundLabel = this.labelService.findById(data.getLabelId());
        if(foundLabel.isPresent()){
          toUpdate.setLabel(foundLabel.get());
        }
      }

      Event updatedEvent = this.eventRepository.save(toUpdate);

      return Optional.of(updatedEvent);
    }

    return foundEvent;
  }

}
